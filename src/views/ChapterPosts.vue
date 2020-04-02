<template>
  <v-app>
    <v-app-bar fixed color="amber lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-2"
        >01 | Chemical reactions and equations</v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-app-bar>
    
      <v-content class="pa-4">
        <v-container>
          <div class="description"
            v-for="(item, index) in articles" 
            :key="index" 
            v-html="item.post_content"
          ></div>
        </v-container>
      </v-content>
    <v-footer fixed class="font-weight-medium d-flex justify-space-between">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <div>
        <v-btn icon disabled>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <p>01/10</p>
        <v-btn icon>
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
      chapterArticle: state => state.syllabus.chapterArticle
    }),

    ...mapGetters({
      getchapterArticle: "syllabus/getchapterArticle"
    })
  },

  methods: {
    ...mapActions({
      getArticleByChapter: "syllabus/getArticleByChapter"
    })
  },

  created() {
    this.chaptername = this.$route.params.chapter;

    if( this.chaptername && !this.chapterArticle[this.chaptername] ) {
      this.getArticleByChapter({
        chaptername: this.chaptername
      }).then(response => {
        this.articles = response;
      })
    } else {
      this.articles = this.chapterArticle[this.chaptername];
    }
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
