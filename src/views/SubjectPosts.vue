<template>
  <v-app>
    <v-app-bar absolute color="dark" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1">Choose Chapter</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="pa-4">
      <div class="mt-12">
        <p class="text-center ma-0 pa-2">
          For webkit browsers, you can use the following pseudo elements to
          customize the
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
              to="/syllabus/maths/real-numbers"
              v-for="(item, index) in articles"
              :key="index"
            >
              <v-card
                :elevation="5"
                width="260"
                height="320"
                overflow-x="hidden"
              >
                <v-img
                  height="150"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title
                  class="py-2 title-text"
                  :title="item.post_title"
                  >{{ item.post_title }}</v-card-title
                >
                <v-card-text>
                  <div class="subtitle-1" title="Real Number">Real Number</div>
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
      <p class="text-center"><strong>v1.00</strong><br />App Updated</p>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SubjectPosts",
  data: () => ({
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
        .substring(0, 100);
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
    } else {
      this.getsyllabusArticleList({
        subject: this.subjectname
      }).then(response => {
        if (response) {
          this.articles = response;
          this.articleCount = response.length;
        }
      });
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
  height: calc(100vh - 56px);
  overflow: auto;
  padding: 10px;
}
.slidercon {
  max-width: 94vh;
  overflow: auto;
  margin: 0 auto;
}
.v-card {
  display: inline-block !important;
  margin: 10px !important;
}
::-webkit-scrollbar {
  width: 0px;
}
.subtitle-1,
.title-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.subtitle-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 58px;
}
</style>
