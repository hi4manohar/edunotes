<template>
  <v-app class="blue-grey lighten-5">
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
              <div class="title px-2">
                <h2 class="mb-0">{{ article.title }}</h2>
                <v-chip
                  v-for="(tag, tagindex) in article.tags.split(',')"
                  :key="tagindex"
                  class="mr-2"
                  color="pink"
                  x-small
                  label
                  text-color="white"
                  >{{ tag }}
                </v-chip>
                <v-divider></v-divider>
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
          <a @click="$router.go(-1)">
            <v-icon>mdi-close</v-icon>
          </a>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>
<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";
import { contentMixin } from "../mixins";

export default {
  props: ["content"],
  mixins: [contentMixin],
  name: "AnswersContent",
  data: () => ({
    skloader: {
      loading: true,
    },
    article: {},
  }),
  computed: {
    ...mapState({
      names: (state) => state.answers.answersList,
    }),
  },
  methods: {
    ...mapActions({
      loadAnswersList: "answers/answersList",
    }),

    loadAnswer(id) {
      if (this.names[id]) {
        this.article = {
          title: this.names[id].post_title,
          content: this.names[id].post_content,
          tags: this.names[id].tags,
          guid: this.names[id].guid,
        };
      } else {
        console.log("hello");
      }
    },
    showListAnswers() {
      this.$emit("showListAnswers", true);
    },
  },
  created() {
    this.loadAnswer(this.$route.params.articleid);
  },
  mounted() {
    this.$nextTick(function() {
      this.skloader.loading = false;
    });
  },
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
