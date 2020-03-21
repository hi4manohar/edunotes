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
        <v-container class="mb-12" v-else>
          <h4>Article List</h4>
          <br>
          <div
            class="list-card mb-4"
            v-for="(name, index) in names"
            @click="showContent(index)"
            :key="index"
          >
            <v-card class="mx-auto" max-width="344" :class="{ active: activeIndex === index }">
              <v-list-item v-ripple>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2" v-text="name.post_title"></v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="120"></v-img>
              <v-card-text
                v-html="trimmedData(name.post_content)">
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Read
                </v-btn>
                <v-btn text color="deep-purple accent-4">Save</v-btn>
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
        <div
          v-for="(name, index) in names"
          @click="showContent(index)"
          :key="index"
          v-show="false"
        >
          <v-list-item :class="{ active: activeIndex === index }" ripple>
            <v-list-item-content>
              <v-list-item-title
                lass="text-truncate"
                v-text="name.post_title"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="text-truncate"
                v-html="trimmedData(name.post_content)"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </div>        
      </v-content>      
      <Footer active="home" />
    </div>
    <div v-if="articleContent" transition="slide-x-transition">
      <articleContent
        :content="articleData"
        v-on:showListArticle="showListArticle()"
      />
    </div>
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
      type: "list-item-two-line"
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
    // ...mapActions('article', {
    //   loadArticleList: 'articleList'
    // }),
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
  font-size: 16px !important;
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


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
