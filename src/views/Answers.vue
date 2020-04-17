<template>
  <v-app>
    <div>
      <Header pagetitle="Questions and Answers" />
      <v-content class="pt-0" v-scroll="onScroll" id="scroll-target">
        <skloader :loading="loading" v-if="loading" />
        <v-container class="px-0 py-2 blue-grey lighten-5" v-else>
          <div class="list-card mb-2">
            <v-card class="mx-auto elevation-0">
              <v-list-item @click="getdrawer($event)" class="text-center">
                <v-list-item-title class="subtitle-2 tex-center text-wrap"
                  >{{ activeTagsName }}
                  <v-icon>mdi-menu-down </v-icon></v-list-item-title
                >
              </v-list-item>
            </v-card>
          </div>

          <AnswersContentContainer :names="names" />

          <div style="text-align:center;" class="ma-4">
            <v-btn
              :disabled="!answersCount"
              :loading="loadMore"
              @click="loadAnswers('page')"
              depressed
              small
              color="primary text-center"
              >Load More
            </v-btn>
          </div>
        </v-container>
      </v-content>
      <Footer active="enc" />
      <v-navigation-drawer
        v-model="drawer"
        v-if="drawer"
        fixed
        bottom
        temporary
      >
        <TagNavigation v-on:toggleTagsParent="toggleTags" />
      </v-navigation-drawer>
    </div>
    <AskRating />
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import TagNavigation from "@/components/answers/TagNavigation.vue";
import AnswersContentContainer from "@/components/answers/AnswersContentContainer.vue";
import skloader from "@/components/answers/skloader.vue";
import { mapState, mapActions } from "vuex";
import AskRating from "@/components/common/AskRating.vue";

export default {
  name: "Answers",
  data: () => ({
    loadMore: false,
    drawer: false,
    group: null,
    loading: true
  }),
  components: {
    Header,
    Footer,
    TagNavigation,
    AnswersContentContainer,
    skloader,
    AskRating
  },
  computed: {
    ...mapState({
      names: state => state.answers.answersList,
      homeScroll: state => state.scroll.component.answers,
      answersCount: state => state.answers.answersCount,
      answersTags: state => state.answers.answersTags,
      activePage: state => state.answers.activePage,
      activeTagsIndex: state => state.answers.activeTagsIndex
    }),
    activeTagsName: {
      get() {
        if (
          this.activeTagsIndex >= 0 &&
          this.answersTags[this.activeTagsIndex]
        ) {
          return this.answersTags[this.activeTagsIndex].tags;
        } else {
          return "All Tags";
        }
      },
      set() {
        return "";
      }
    }
  },
  methods: {
    ...mapActions({
      loadAnswersList: "answers/answersList",
      setHomeScroll: "scroll/setHomeScroll",
      saveActiveTagsIndex: "answers/saveActiveTagsIndex",
      setActivePage: "answers/setActivePage"
    }),
    onScroll() {
      this.setHomeScroll({
        component: "answers",
        axis: { x: 0, y: window.scrollY }
      });
    },
    loadAnswers(type) {
      if (type === "initial") {
        this.loadAnswersList({
          page: this.activePage,
          tags:
            this.answersTags.length > 0 && this.activeTagsIndex >= 0
              ? this.answersTags[this.activeTagsIndex].slugs
              : ""
        });
      } else if (type === "page") {
        this.setActivePage(this.activePage + 1);
        this.loadMore = true;
        this.loadAnswersList({
          page: this.activePage,
          tags:
            this.activeTagsIndex >= 0 && this.activeTagsIndex !== false
              ? this.answersTags[this.activeTagsIndex].slugs
              : ""
        });
      }
    },
    toggleTags(index) {
      this.setActivePage(0);
      this.saveActiveTagsIndex(index);
      this.drawer = false;
      this.loading = true;
      this.loadAnswers("initial");
    },
    getdrawer() {
      this.drawer = true;
    },
    setDrawer() {
      console.log("umm");
      this.drawer = false;
    }
  },
  created() {
    if (!this.names.length > 0) {
      this.loadAnswers("initial");
    } else {
      this.loading = false;
    }
  },
  watch: {
    names: function(n) {
      if (n.length > 0) {
        this.loadMore = false;
        this.loading = false;
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
h4 {
  font-size: 16px !important;
  margin-bottom: 0px;
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
