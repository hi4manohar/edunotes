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
    <v-img
      src="https://picsum.photos/510/300?random"
      aspect-ratio="2"
      class="mb-2"
    ></v-img>
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
    <v-img
      src="https://picsum.photos/510/300?random"
      aspect-ratio="2"
      class="mb-2"
    ></v-img>
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
  },
  mounted() {
    this.$vuetify.goTo(0);
  }
};
</script>
<style scoped>
h2 {
  font-size: 20px;
  font-weight: 500;
}
h3 {
  font-size: 16px;
  font-weight: 500;
}
h4 {
  font-size: 14px;
  font-weight: 500;
}
h5 {
  font-size: 14px;
  font-weight: 500;
}
h6 {
  font-size: 13px;
  font-weight: 400;
}
p {
  font-size: 12px;
  color: #616161;
}
ul {
  margin: 20px 0px;
}
ul li {
  font-size: 12px;
  font-weight: 400;
  color: #616161;
}
</style>
