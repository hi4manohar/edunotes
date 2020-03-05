<template>
  <v-container>
    <v-app-bar app clipped-right color="#1565C0" dark>
      <a @click="$router.back()"><v-icon>mdi-arrow-left</v-icon></a>
      <v-spacer />
      <v-toolbar-title>EduNotes</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <h2>{{ articleTitle }}</h2>

    <p>
      The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <h3>This is Another Title</h3>
    <h4>This is Another Title</h4>
    <h5>This is Another Title</h5>
    <h6>This is Another Title</h6>

    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
      45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    </p>
  </v-container>
</template>

<script>
export default {
  name: "ArticleList",
  data: () => ({
    articleTitle: false
  }),
  methods: {
    loadArticle() {
      this.articleTitle = this.$route.params.articlename;
    }
  },
  created() {
    this.loadArticle();
  }
};
</script>
<style scoped>
h2 {
  font-size: 22px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: 15px;
}
h6 {
  font-size: 13px;
}
p {
  font-size: 13px;
}
</style>
