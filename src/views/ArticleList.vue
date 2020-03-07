<template>
  <v-app>
    <Header />
    <v-content class="pt-1">
      <router-link
        v-for="(name, index) in names"
        :to="`/content/${name.title}`"
        :key="index"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              lass="text-truncate"
              v-text="name.title"
            ></v-list-item-title>
            <v-list-item-subtitle
              class="text-truncate"
              v-text="name.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-content>
    <Footer active="home" />
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
      {
        title:
          "This is short description of this post This is short description ",
        subtitle:
          "This is short description of this post This is short description of this post This is short description of this post"
      },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" },
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
<style scoped>
.v-list-item {
  border: 1px solid #eee;
  border-radius: 0px;
  margin: 5px 10px;
  background: #f7f7f7;
}
.v-list-item__title {
  font-size: 14px;
  max-width: 90%;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
a {
  text-decoration: none;
}
</style>
