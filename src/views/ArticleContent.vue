<template>
  <div class="article-content">
    <v-content class="pt-0">
      <v-container>
        <div class="skloader" v-if="skloader.loading">
          <v-skeleton-loader
            :loading="skloader.loading"
            :transition-group="skloader.transition"
            :height="skloader.height"
            :type="skloader.types"
          >
          </v-skeleton-loader>
        </div>
        <div class="article" v-else>
          <div class="title">
            <h2>{{ article.title }}</h2>
          </div>
          <div class="description" v-html="article.content"></div>
        </div>
      </v-container>
    </v-content>
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <a @click="showListArticle()"><v-icon>mdi-close</v-icon></a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  props: ['content'],
  name: "ArticleList",
  data: () => ({
    skloader: {
      loading: true,
      transition: "none",
      height: 388,
      types: "article, card-avatar"
    },
    article: {}
  }),
  methods: {
    loadArticle() {
      this.article = {
        title: this.content.post_title,
        content: this.content.post_content
      };
    },
    showListArticle() {
      this.$emit('showListArticle', true)
    }
  },
  created() {
    this.loadArticle();
  },
  mounted() {
    this.$vuetify.goTo(0);
    this.$nextTick(function() {
      let ref = this;
      setTimeout(function() {
        ref.skloader.loading = false;
      }, 1000);
    });
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 6px;
  height: calc(100vh - 62px);
  margin-bottom: 56px !important;
  overflow: auto;
}
</style>
