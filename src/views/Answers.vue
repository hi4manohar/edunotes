<template>
  <v-app>
    <div v-show="!articleContent">
      <Header pagetitle="Read Article" />
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
        <v-container class="px-0 py-2 blue-grey lighten-5 " v-else>
          <div
            class="list-card mb-2"
            v-for="(name, index) in names"
            :key="index"
          >
            <v-card
              class="mx-auto elevation-0"
              :class="{ active: activeIndex === index }"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="mb-2" style="font-size:13px"
                    >Physics</v-list-item-subtitle
                  >
                  <v-list-item-title
                    class="subtitle-2 text-wrap"
                    v-text="name.post_title"
                  ></v-list-item-title>
                  <v-list-item-subtitle style="font-size:12px"
                    >Posted on:
                    {{ name.post_date | dateFormat }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-card-actions class="px-3">
                <router-link to="write/123">
                  <v-btn
                    text
                    small
                    class="text-capitalize font-weight-regular"
                    @click="changewriteComponent()"
                  >
                    <v-icon>mdi-pencil-plus</v-icon>
                    <span style="font-size:14px;" class="pl-2"
                      >Write Answer</span
                    >
                  </v-btn>
                </router-link>
                <v-btn
                  text
                  small
                  class="text-capitalize font-weight-regular"
                  @click="$router.push('/post/' + index)"
                >
                  <v-icon>mdi-eye </v-icon>
                  <span style="font-size:14px;" class="pl-2">View Answer</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-list-item-title class="subtitle-2">
                        <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-actions>
            </v-card>
          </div>
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
      <Footer active="enc" />
    </div>
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { mapState, mapActions } from "vuex";
import { skloaderMixin, cordovaMixin } from "../mixins";
import { momentFilter } from "../filters";

export default {
  name: "Encyclopedia",
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
    writeComponent: false
  }),
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      names: state => state.article.articleList,
      homeScroll: state => state.scroll.component.home,
      articleCount: state => state.article.articleCount
    })
  },
  methods: {
    ...mapActions({
      loadArticleList: "article/articleList",
      setHomeScroll: "scroll/setHomeScroll"
    }),
    onScroll() {
      this.setHomeScroll({
        component: "home",
        axis: { x: 0, y: window.scrollY }
      });
    },
    changewriteComponent() {
      this.writeComponent = true;
    },
    trimmedData(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 200);
    },
    loadArticles(type) {
      if (type === "initial") {
        if (!this.names.length) {
          this.loadArticleList({ page: this.page });
        } else {
          this.skloader.loading = false;
        }
      } else if (type === "page") {
        this.page = this.page + 1;
        this.loadMore = true;
        this.loadArticleList({ page: this.page });
      }
    }
  },
  created() {
    this.loadArticles("initial");
  },
  watch: {
    names: function(n) {
      if (n.length > 0) {
        this.loadMore = false;
        this.skloader.loading = false;
      }
    },

    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
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
h4 {
  font-size: 16px !important;
  margin-bottom: 0px;
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
</style>
