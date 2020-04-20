<template>
  <v-app :class="$options.name">
    <v-app-bar fixed color="amber lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-2" v-if="articles">{{
        articles[activeArticle].post_title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pa-4">
      <v-container>
        <div class="skloader" v-if="!articles">
          <v-skeleton-loader
            :loading="true"
            transition-group="none"
            height="388"
            type="article, card-avatar"
          >
          </v-skeleton-loader>
        </div>
        <div
          v-else
          class="description"
          v-html="articles[activeArticle].post_content"
        ></div>
      </v-container>
    </v-content>
    <v-footer
      fixed
      v-if="articles"
      class="font-weight-medium d-flex justify-space-between"
    >
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <div>
        <v-btn
          icon
          :disabled="activeArticle ? false : true"
          @click="changeArticleMethod('de')"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <p>
          {{ ("0" + (activeArticle + 1)).slice(-2) }} /
          {{ ("0" + articles.length).slice(-2) }}
        </p>
        <v-btn
          icon
          :disabled="activeArticle + 1 === articles.length ? true : false"
          @click="changeArticleMethod('in')"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-btn icon>
        <v-icon>mdi-share-all-outline </v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "ChapterPosts",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      chaptername: null,
      articles: null
    };
  },
  computed: {
    ...mapState({
      chapterArticle: state => state.syllabus.chapterArticle,
      activeArticle: state => state.syllabus.activeArticle
    }),

    ...mapGetters({
      getchapterArticle: "syllabus/getchapterArticle"
    })
  },

  methods: {
    ...mapActions({
      getArticleByChapter: "syllabus/getArticleByChapter",
      changeactiveArticle: "syllabus/changeactiveArticle"
    }),

    changeArticleMethod(type) {
      this.changeactiveArticle(type);
      window.scrollTo(0, 0);
    }
  },

  created() {
    this.chaptername = this.$route.params.chapter;

    if (this.chaptername && !this.chapterArticle[this.chaptername]) {
      this.getArticleByChapter({
        chaptername: this.chaptername
      }).then(response => {
        this.articles = response;
      });
    } else {
      this.articles = this.chapterArticle[this.chaptername];
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style scoped="">
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
  overflow: auto;
  padding: 10px;
}
.v-toolbar {
  background: #fffce5 !important;
}
.v-footer {
  padding: 10px;
}
.v-footer p {
  display: inline-block;
  width: 70px;
  text-align: center;
  margin-bottom: 0px;
}
</style>
