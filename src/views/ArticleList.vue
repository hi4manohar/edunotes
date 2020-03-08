<template>
  <v-app>
    <Header />
    <v-content class="pt-1">
      <div class="skloader" v-if="skloader.loading">
        <v-list-item v-for="n in 2" :key="n">
          <v-list-item-content>
            <v-skeleton-loader
              :loading="skloader.loading"
              :transition="skloader.transition"
              :height="skloader.height"
              :type="skloader.type"
            >
            </v-skeleton-loader>
          </v-list-item-content>
        </v-list-item>
      </div>
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
    skloader: {
      loading: true,
      transition: "none",
      height: 72,
      type: "list-item-two-line"
    }
  }),
  components: {
    Header,
    Footer
  },
  mounted() {
    let ref = this;
    setTimeout(function() {
      ref.skloader.loading = false;
      ref.names = [
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
      ];
    }, 1000);
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
