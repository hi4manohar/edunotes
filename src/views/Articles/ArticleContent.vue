<template>
  <v-app :class="$options.name" class="blue-grey lighten-5">
    <div class="article-content">
      <v-content class="pt-0">
        <v-container>
          <div class="skloader" v-if="skloader.loading">
            <v-skeleton-loader
              :loading="skloader.loading"
              transition-group="none"
              height="388"
              type="article, card-avatar"
            >
            </v-skeleton-loader>
          </div>
          <div class="article" v-else>
            <v-card class="pa-2">
              <div class="title">
                <h2 class="px-2">{{ article.title }}</h2>
                <hr />
              </div>

              <div
                class="description px-2"
                v-html="wpautop(article.content)"
              ></div>
            </v-card>
          </div>
        </v-container>
      </v-content>
      <v-footer fixed class="font-weight-medium">
        <v-col class="text-center" cols="12">
          <a @click="$router.go(-1)" class="pa-4">
            <v-icon>mdi-close</v-icon>
          </a>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { contentMixin } from "@/mixins";

export default {
  props: ["content"],
  mixins: [contentMixin],
  name: "ArticleContent",
  data: () => ({
    skloader: {
      loading: true
    },
    article: {}
  }),
  computed: {
    ...mapState({
      names: state => state.article.articleList
    })
  },
  methods: {
    ...mapActions({
      loadArticleList: "article/articleList"
    }),

    loadArticle(id) {
      if (this.names[id]) {
        this.article = {
          title: this.names[id].post_title,
          content: this.names[id].post_content,
          guid: this.names[id].guid
        };
      } else {
        console.log("hello");
      }
    },
    showListArticle() {
      this.$emit("showListArticle", true);
    }
  },
  created() {
    this.loadArticle(this.$route.params.articleid);
  },
  mounted() {
    this.$nextTick(function() {
      this.skloader.loading = false;
    });
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 6px;
  margin-bottom: 56px !important;
  overflow: auto;
}
.v-footer {
  box-shadow: 0px 0px 2px #888;
}
</style>
