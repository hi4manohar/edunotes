<template>
  <v-app>
    <!-- <div>
      <v-app-bar app clipped-right color="#1565C0" dark>
        <a @click="$router.back()"><v-icon ripple>mdi-arrow-left</v-icon></a>
        <v-toolbar-title class="pl-4">EduNotes</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
    </div> -->
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
    <v-footer
      absolute
      class="font-weight-medium">
      <v-col
        class="text-center"
        cols="12">
        <a @click="$router.back()"><v-icon>mdi-close</v-icon></a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
        title: this.$route.params.articlename,
        content: `<p>
              The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
              class="mb-2"
            ></img>
            <ul>
              <li>Design of list first</li>
              <li>Design of list first</li>
              <li>Design of</li>
              <li>Design of list first this is</li>
              <li>Design of</li>
            </ul>
            <h3>This is Another Title</h3>
            <p>
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam.
            </p>
            <img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
              class="mb-2"
            ></img>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
              45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <h4>This is Another Title</h4>
            <p>
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur.
            </p>`
      };
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
