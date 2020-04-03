<template>
  <v-app>
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
            <div class="title">
              <h2>{{ article.title }}</h2>
              <hr />
            </div>

            <div class="book-img pa-2">
              <v-img
                :src="article.guid"
                width="100%"
                max-height="200px"
                class="mx-auto"
              >
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

            <div class="description pa-4" v-html="article.content"></div>
          </div>
        </v-container>
      </v-content>
      <v-footer fixed class="font-weight-medium">
        <v-col class="text-center" cols="12">
          <a @click="$router.go(-1)">
            <v-icon>mdi-close</v-icon>
          </a>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["content"],
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
.book-img {
  background: #eee;
  border: 1px solid #ddd;
  max-width: 400px;
  margin: 0 auto;
}
</style>
