<template>
  
  <v-app>
    <div v-show="!articleContent">
      <Header />
      <v-content class="pt-0">
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
        <div
          v-for="(name, index) in names"
          @click="showContent(index)"
          :key="index"
          v-else
        >
          <v-list-item ripple>
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
    <div v-if="articleContent">
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
import { articleService } from "../service/article.service";
import articleContent from "./ArticleContent";

export default {
  name: "ArticleList",
  data: () => ({
    skloader: {
      loading: true,
      transition: "none",
      height: 72,
      type: "list-item-two-line"
    },
    names: [],
    articleContent: false,
    articleData: {}
  }),
  components: {
    Header,
    Footer,
    articleContent
  },
  computed: {},
  methods: {
    getUrlStringFromTitle(str) {
      if (str === null || str === "") return false;
      else return encodeURI(str.replace(/ /g, "-"));
    },
    showContent(index) {
      this.articleContent = true;
      this.articleData = this.names[index];
    },
    showListArticle(val) {
      this.articleContent = val;
    },
    trimmedData(str) {
      console.log(typeof str);
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 100);
    },

    async loadArticleList() {
      try {
        let json = await articleService.articleList();
        console.log(json);
        if (json.status === true) this.names = json.data;
        this.skloader.loading = false;
      } catch (err) {
        console.log("err", err);
      }
    }
  },
  created() {
    if (!this.names.length) {
      this.loadArticleList();
    }
  },
  mounted() {}
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}

.v-list-item {
  box-shadow: 0px 1px 4px #ddd;
  border-radius: 1px;
  background: #fff;
  margin: 10px;
}

.v-list-item__title {
  font-size: 14px;
  max-width: 90%;
}

.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}

.skloader .v-list-item__content {
  padding: 0px;
}
</style>
