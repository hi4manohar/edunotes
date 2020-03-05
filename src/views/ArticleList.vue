<template>
  <v-app>
    <Header />
    <v-content pa-5>
      <v-list-item v-for="name in names" :key="name.title">
        <v-list-item-content>
          <v-list-item-title v-text="name.title"></v-list-item-title>
          <v-list-item-subtitle v-text="name.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-content>
    <Footer />
  </v-app>
</template>


<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "ArticleList",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    links: ["Home", "About Us", "Team", "Services"],
    item: 0,
    items: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" },
      { text: "Backups", icon: "mdi-cloud-upload" }
    ],
    names: [
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" }
    ]
  }),
  components: {
    Header,
    Footer
  }
};
</script>





