<template>
  <v-app>
    <Header />
    <v-content class="pt-20">
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
import { mapState, mapActions } from 'vuex'

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
  computed: {
    ...mapState({
      names: state => state.article.articleList
    })
  },
  methods: {
    ...mapActions('article', {
      loadArticleList: 'articleList'
    })
  },
  created() {
    if( !this.names.length ) {
      this.loadArticleList();
    } else {

      console.log('hi');      
    }
    
  },
  mounted() {
    this.$nextTick(function() {
      let ref = this;
      ref.skloader.loading = false;
    });
  }
};
</script>
<style scoped>
.v-content {
  padding-bottom: 56px !important;
}
.v-list-item {
  box-shadow: 0px 0px 4px #ddd;
  border-radius: 5px;
  background: #fff;
  margin: 10px;
}
.v-list-item__title {
  font-size: 14px;
  max-width: 90%;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
.skloader .v-list-item__content {
  padding: 0px;
}
</style>
