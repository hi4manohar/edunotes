<template>
  <v-app :class="$options.name">
    <div v-show="!articleContent">
      <Header :pagetitle="getCategoryName" />
      <v-content class="pt-0" v-scroll="onScroll" id="scroll-target">
        <div class="skloader" v-if="skloader.loading">
          <v-list-item v-for="n in 3" :key="n" class="pa-0">
            <v-list-item-content>
              <v-skeleton-loader
                :loading="skloader.loading"
                :transition="skloader.transition"
                :height="skloader.height"
                :type="skloader.type"
              >
              </v-skeleton-loader>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-container class="blue-grey lighten-5 " v-else>
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ quizName }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div class="iframe-container">
                <iframe
                  id="quizframe"
                  style="width:100%; height:88vh; border:none;"
                  :src="dsrc"
                ></iframe>
              </div>
            </v-card>
          </v-dialog>
          <v-row no-gutters v-if="listype === 'grid'">
            <v-col
              v-for="(name, index) in names"
              @click="showContent(index, name.post_guid, name.post_title)"
              :key="index"
              cols="4"
              xs="4"
              sm="2"
              class="pa-2"
            >
              <v-card outlined elevation="2">
                <v-img
                  :src="name.guid"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-card-title
                    class="body-2 font-weight-bold"
                    style="word-break: normal;"
                    v-text="name.post_title"
                  ></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>

          <v-row no-gutters v-else>
            <v-col
              cols="12"
              xs="12"
              sm="6"
              v-for="(name, index) in names"
              :key="index"
              class="pb-2"
            >
              <div class="list-card" @click="$router.push('/post/' + index)">
                <v-card
                  class="mx-auto elevation-0 px-1"
                  :class="{ active: activeIndex === index }"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                      v-if="name.guid"
                      class="ml-3 mt-3 article-img"
                      size="64"
                      tile
                    >
                      <v-img :src="name.guid">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="black lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-avatar>
                    <v-card class="elevation-0" width="100%">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-subtitle class="subtitle-2">{{
                            name.post_title
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <div style="text-align:center;" class="ma-4">
            <v-btn
              :disabled="!articleCount"
              :loading="loadMore"
              @click="loadArticles('page')"
              depressed
              small
              color="primary text-center"
              >Load More</v-btn
            >
          </div>
        </v-container>
      </v-content>
      <v-overlay :value="overlays" opacity="0.02">
        <v-progress-circular
          color="blue"
          indeterminate
          size="32"
        ></v-progress-circular>
      </v-overlay>
      <Footer />
    </div>
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { mapState, mapActions } from "vuex";
import { skloaderMixin, cordovaMixin } from "../../mixins";
import { momentFilter } from "../../filters";

export default {
  name: "CategoryArticle",
  mixins: [skloaderMixin, cordovaMixin],
  filters: {
    dateFormat: momentFilter.dateFormat
  },
  data: () => ({
    articleContent: false,
    articleData: {},
    activeIndex: false,
    loadMore: false,
    items: [
      { icon: "mdi-whatsapp", title: "Whatsapp" },
      { icon: "mdi-facebook", title: "Facebook" }
    ],
    page: 0,
    articleCategory: false,
    listype: false,
    overlays: false,
    dialog: false,
    dsrc: false,
    quizName: ""
  }),
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      names: state => state.article.articleList,
      homeScroll: state => state.scroll.component.home,
      articleCount: state => state.article.articleCount,
      category: state => state.article.category
    }),
    getCategoryName: {
      get() {
        return this.$route.params.category.trim().replace(/-/g, " ");
      }
    }
  },
  methods: {
    ...mapActions({
      loadArticleList: "article/articleList",
      setHomeScroll: "scroll/setHomeScroll",
      setCategory: "article/setCategory"
    }),
    showContent(index, url, title) {
      if (this.articleCategory === "quizzes") {
        event.preventDefault();
        this.dialog = true;
        this.dsrc = url;
        this.quizName = title;
      } else {
        this.$router.push("/post/" + index);
      }
    },
    onScroll() {
      this.setHomeScroll({
        component: "home",
        axis: { x: 0, y: window.scrollY }
      });
    },
    loadArticles(type) {
      if (type === "initial") {
        if (!this.names.length || this.category !== this.articleCategory) {
          this.loadArticleList({
            page: this.page,
            category: this.articleCategory
          });
        } else {
          this.skloader.loading = false;
        }
      } else if (type === "page") {
        this.page = this.page + 1;
        this.loadMore = true;
        this.loadArticleList({
          page: this.page,
          category: this.articleCategory
        });
      }
    }
  },
  created() {
    this.articleCategory = this.$route.params.category.trim();
    this.listype = this.$route.query.listype
      ? this.$route.query.listype
      : "list";
    this.loadArticles("initial");
  },
  watch: {
    names: function(n) {
      if (n.length > 0) {
        this.loadMore = false;
        this.skloader.loading = false;
      }
    }
  },
  mounted() {
    // this.skloader.loading = false;
    this.$nextTick(() => {
      window.scrollTo(0, Number(this.homeScroll.y));
    });
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
}
.v-list-item__title {
  font-size: 18px !important;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
.skloader .v-list-item__content {
  padding: 0px;
}
.article-img {
  border-radius: 4px;
  overflow: hidden;
  background: #f5f5f5;
}
.v-card {
  border-radius: 0px !important;
}
.v-btn {
  font-size: 12px;
}
.v-btn span i {
  font-size: 18px !important;
}
.iframe-container {
  background: url(https://edunotes.fresherscode.com/api/uploads/static/images/ajax-loader.gif)
    center center no-repeat;
  background-size: 200px;
}
</style>
