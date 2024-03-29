<template>
  <v-app :class="$options.name">
    <v-app-bar fixed color="dark" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1">Choose Chapter</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pa-4">
      <div class="skloader" v-show="skloader.loading">
        <v-skeleton-loader
          :loading="skloader.loading"
          transition-group="none"
          height="388"
          type="article, card-avatar"
        >
        </v-skeleton-loader>
      </div>
      <div v-show="!skloader.loading">
        <div class="mt-12">
          <p class="text-center ma-0 pa-2 font-weight-bold">
            Start Learning step by step with chapters that you need to prepare.
            You can browse and read chapters you want anytime, anywhere.
          </p>
        </div>
        <div class="slidercon">
          <v-container id="scroll-target" class="overflow-y-auto">
            <div
              class="sliderconin"
              :style="{ width: getsliderWidth }"
              v-scroll:#scroll-target="onScroll"
            >
              <router-link
                :to="'/syllabus/chapters/' + item.post_name"
                v-for="(item, index) in articles"
                :key="index"
              >
                <v-card
                  :elevation="5"
                  width="260"
                  height="385"
                  overflow-x="hidden"
                >
                  <v-img height="170" :src="item.guid"></v-img>
                  <v-card-title
                    class="py-4 title-text"
                    :title="item.post_title"
                    >{{ item.post_title }}</v-card-title
                  >
                  <v-card-text
                    class="pb-0"
                    style="max-height: 110px; overflow:hidden;"
                  >
                    <div
                      class="subtitle-text"
                      v-html="trimmedData(item.post_content)"
                    ></div>
                  </v-card-text>
                </v-card>
              </router-link>
            </div>
          </v-container>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SubjectPosts",
  data: () => ({
    skloader: {
      loading: true
    },
    sliderWidth: "280",
    subjectname: null,
    articleCount: 0,
    articles: []
  }),
  computed: {
    ...mapState({
      syllabusArticleList: state => state.syllabus.syllabusArticleList,
      homeScroll: state => state.scroll.component.subjectPosts
    }),

    getsliderWidth() {
      return this.articleCount * this.sliderWidth + "px";
    }
  },

  methods: {
    ...mapActions({
      getsyllabusArticleList: "syllabus/syllabusArticleList",
      setHomeScroll: "scroll/setHomeScroll"
    }),

    trimmedData(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 200);
    },

    onScroll(e) {
      this.setHomeScroll({
        component: "subjectPosts",
        axis: { x: e.target.scrollLeft, y: 0 }
      });
    }
  },

  created() {
    this.subjectname = this.$route.params.subjects;

    if (this.subjectname && this.syllabusArticleList[this.subjectname]) {
      this.articles = this.syllabusArticleList[this.subjectname];
      this.articleCount = this.syllabusArticleList[this.subjectname].length;
      this.skloader.loading = false;
    } else {
      this.getsyllabusArticleList({
        subject: this.subjectname
      }).then(response => {
        if (response) {
          this.articles = response;
          this.articleCount = response.length;
          this.skloader.loading = false;
        }
      });
    }
  },

  watch: {
    articles(n) {
      if (n.length > 0) {
        this.skloader.loading = false;
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.container = document.getElementById("scroll-target");
      this.container.scrollLeft = Number(this.homeScroll.x);
    });
  }
};
</script>
<style scoped="">
.v-content {
  overflow: auto;
  padding: 10px;
}
.slidercon {
  max-width: 94vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0 auto;
}
.v-card {
  display: inline-block !important;
  margin: 10px !important;
}
::-webkit-scrollbar {
  width: 0px;
}
.title-text {
  display: block;
  word-break: break-word;
  height: 84px;
  overflow: hidden;
}
</style>
