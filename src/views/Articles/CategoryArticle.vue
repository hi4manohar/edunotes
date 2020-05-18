<template>
  <v-app :class="$options.name">
    <div v-show="!articleContent">
      <Header :pagetitle="getCategoryName" />
      <v-content class="pt-0" v-scroll="onScroll" id="scroll-target">
        <div class="skloader" v-if="skloader.loading">
          <v-list-item v-for="n in 3" :key="n" class="pa-0">
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
        <v-container class="blue-grey lighten-5 " v-else>
          <QuizDialog
            v-if="listype === 'grid'"
            :names="names"
            :articleCategory="articleCategory"
          />

          <ListArticleContainer v-else :names="names" />
          <div style="text-align:center;" class="ma-4">
            <v-btn
              :disabled="!articleCount"
              :loading="loadMore"
              @click="loadArticles('page')"
              depressed
              small
              color="primary text-center"
              >Load More</v-btn
            >
          </div>
        </v-container>
      </v-content>
      <v-overlay :value="overlays" opacity="0.02">
        <v-progress-circular
          color="blue"
          indeterminate
          size="32"
        ></v-progress-circular>
      </v-overlay>
      <Footer />
    </div>
  </v-app>
</template>
<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuizDialog from "@/components/article/QuizDialog";
import ListArticleContainer from "@/components/article/ListArticleContainer";
import { mapState, mapActions } from "vuex";
import { skloaderMixin, cordovaMixin } from "../../mixins";
import { momentFilter } from "../../filters";

export default {
  name: "CategoryArticle",
  mixins: [skloaderMixin, cordovaMixin],
  filters: {
    dateFormat: momentFilter.dateFormat
  },
  data: () => ({
    articleContent: false,
    articleData: {},
    activeIndex: false,
    loadMore: false,
    items: [
      { icon: "mdi-whatsapp", title: "Whatsapp" },
      { icon: "mdi-facebook", title: "Facebook" }
    ],
    page: 0,
    articleCategory: false,
    listype: false,
    overlays: false
  }),
  components: {
    Header,
    Footer,
    QuizDialog,
    ListArticleContainer
  },
  computed: {
    ...mapState({
      names: state => state.article.articleList,
      homeScroll: state => state.scroll.component.home,
      articleCount: state => state.article.articleCount,
      category: state => state.article.category
    }),
    getCategoryName: {
      get() {
        return this.$route.params.category.trim().replace(/-/g, " ");
      }
    }
  },
  methods: {
    ...mapActions({
      loadArticleList: "article/articleList",
      setHomeScroll: "scroll/setHomeScroll",
      setCategory: "article/setCategory"
    }),
    onScroll() {
      this.setHomeScroll({
        component: "home",
        axis: { x: 0, y: window.scrollY }
      });
    },
    loadArticles(type) {
      if (type === "initial") {
        if (!this.names.length || this.category !== this.articleCategory) {
          this.loadArticleList({
            page: this.page,
            category: this.articleCategory
          });
        } else {
          this.skloader.loading = false;
        }
      } else if (type === "page") {
        this.page = this.page + 1;
        this.loadMore = true;
        this.loadArticleList({
          page: this.page,
          category: this.articleCategory
        });
      }
    }
  },
  created() {
    this.articleCategory = this.$route.params.category.trim();
    this.listype = this.$route.query.listype
      ? this.$route.query.listype
      : "list";
    this.loadArticles("initial");
  },
  watch: {
    names: function(n) {
      if (n.length > 0) {
        this.loadMore = false;
        this.skloader.loading = false;
      }
    }
  },
  mounted() {
    // this.skloader.loading = false;
    this.$nextTick(() => {
      window.scrollTo(0, Number(this.homeScroll.y));
    });
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
}
.v-list-item__title {
  font-size: 18px !important;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
.skloader .v-list-item__content {
  padding: 0px;
}
.v-card {
  border-radius: 0px !important;
}
.v-btn {
  font-size: 12px;
}
.v-btn span i {
  font-size: 18px !important;
}
</style>
