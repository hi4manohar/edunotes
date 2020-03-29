<template>
  <v-app>
    <div v-show="!articleContent">
      <Header pagetitle="Read Article" />
      <v-content
        class="pt-0"
        v-scroll:#scroll-target="onScroll"
        id="scroll-target"
      >
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
            @click="$router.push('/post/' + index)"
            :key="index"
          >
            <v-card
              class="mx-auto elevation-0"
              :class="{ active: activeIndex === index }"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    class="subtitle-2"
                    v-text="name.post_title"
                  ></v-list-item-title>
                  <v-list-item-subtitle>04 Feb, 2020</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <div class="ma-3 my-1 article-img">
                <v-img v-if="name.guid" :src="name.guid" height="150">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>
              <v-card-text
                class="px-3 py-1"
                v-html="trimmedData(name.post_content)"
              >
              </v-card-text>
              <v-card-actions class="px-3">
                <v-btn
                  outlined
                  small
                  color="primary"
                  class="text-capitalize font-weight-regular"
                >
                  Continue Reading
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
        </v-container>
      </v-content>
      <Footer active="home" />
    </div>
    <transition name="slide-fade">
      <div v-if="articleContent">
        <articleContent
          :content="articleData"
          v-on:showListArticle="showListArticle()"
        />
      </div>
    </transition>
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
// import { articleService } from "../service/article.service";
import articleContent from "../components/article/ArticleContent";
import { mapState, mapActions } from "vuex";
import { skloaderMixin } from "../mixins";

export default {
  name: "ArticleList",
  mixins: [skloaderMixin],
  data: () => ({
    articleContent: false,
    articleData: {},
    activeIndex: false,
    items: [
      { icon: "mdi-whatsapp", title: "Whatsapp" },
      { icon: "mdi-facebook", title: "Facebook" }
    ]
  }),
  components: {
    Header,
    Footer,
    articleContent
  },
  computed: {
    ...mapState({
      names: state => state.article.articleList,
      homeScroll: state => state.scroll.component.home
    })
  },
  methods: {
    ...mapActions({
      loadArticleList: "article/articleList",
      setHomeScroll: "scroll/setHomeScroll"
    }),
    onScroll(e) {
      this.setHomeScroll({
        component: "home",
        axis: { x: 0, y: e.target.scrollTop }
      });
    },
    getUrlStringFromTitle(str) {
      if (str === null || str === "") return false;
      else return encodeURI(str.replace(/ /g, "-"));
    },
    showContent(index) {
      this.articleContent = true;
      this.articleData = this.names[index];
      this.activeIndex = index;
    },
    showListArticle(val) {
      this.articleContent = val;
    },
    saveArticle(e, val) {
      e.stopPropagation();
      console.log("save this article", val);
    },
    trimmedData(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 100);
    }
  },
  created() {
    if (!this.names.length) {
      this.loadArticleList();
    } else {
      this.skloader.loading = false;
    }
  },
  watch: {
    names: function(n) {
      if (n.length > 0) {
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
      this.container = document.getElementById("scroll-target");
      this.container.scrollTop = Number(this.homeScroll.y);
    });
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
.v-list-item__title {
  font-size: 18px !important;
  max-width: 90%;
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
</style>
