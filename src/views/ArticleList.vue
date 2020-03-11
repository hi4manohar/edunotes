<template>
  <v-app>
    <Header />
    <v-content class="pt-0">
      <div class="skloader" v-if="skloader.loading">
        <v-list-item v-for="n in 3" :key="n">
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
        v-else
      >
        <v-list-item ripple>
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
          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
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
    },
    names: {}
  }),
  components: {
    Header,
    Footer
  },
  methods: {
    loadArticleList() {
      this.names = [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title:
            "This is short description of this post This is short description ",
          subtitle:
            "This is short description of this post This is short description of this post This is short description of this post"
        },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Recipes", subtitle: "Jan 17, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Work", subtitle: "Jan 28, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Photos", subtitle: "Jan 9, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Recipes", subtitle: "Jan 17, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Work", subtitle: "Jan 28, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Photos", subtitle: "Jan 9, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Recipes", subtitle: "Jan 17, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Work", subtitle: "Jan 28, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Photos", subtitle: "Jan 9, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Recipes", subtitle: "Jan 17, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Work", subtitle: "Jan 28, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Photos", subtitle: "Jan 9, 2014" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", title: "Recipes", subtitle: "Jan 17, 2014" },
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
    }
  },
  created() {
    this.loadArticleList();
  },
  mounted() {
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
.v-content{
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
.v-list-item {
  box-shadow: 0px 1px 4px #ddd;
  border-radius: 1px;
  background: #fff;
  margin:10px;
}
.v-list-item__title {
  font-size: 14px;
  max-width: 90%;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
.skloader {
  top: 0;
}
.skloader .v-list-item__content {
  padding: 0px;
}
</style>
