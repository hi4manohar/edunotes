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
          <v-list-item v-for="n in 3" :key="n">
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
        <v-container class="" v-else>
          <div
            class="list-card mb-4"
            v-for="(name, index) in names"
            @click="$router.push('/post/' + index)"
            :key="index"
          >
            <v-card class="mx-auto" :class="{ active: activeIndex === index }">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2" v-text="name.post_title"></v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-img v-if="index%2 == 0 && name.guid" :src="name.guid" height="120"></v-img>
              <v-card-text
                v-html="trimmedData(name.post_content)">
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Read
                </v-btn>
                <v-btn text color="deep-purple accent-4" @click="saveArticle($event, index)">Save</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
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

export default {
  name: "ArticleList",
  data: () => ({
    skloader: {
      loading: true,
      transition: "none",
      height: 72,
      type: "list-item-avatar-three-line"
    },
    articleContent: false,
    articleData: {},
    activeIndex: false
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
      // console.log(this.homeScroll);
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
      console.log('save this article', val);
    },
    trimmedData(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 100);
    }

    // async loadArticleList() {

    //   try {
    //     let json = await articleService.articleList();
    //     if (json.status === true) this.names = json.data;
    //     this.skloader.loading = false;
    //   } catch (err) {
    //     console.log("err", err);
    //   }
    // }
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

    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
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
/*.v-list-item {
  box-shadow: 0px 1px 4px #ddd;
  border-radius: 1px;
  background: #fff;
  margin: 10px;
}*/
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
h4{
  font-size: 16px !important;
  margin-bottom: 0px;
}


</style>
