<template>
  <v-app :class="$options.name" class="blue-grey lighten-5">
    <Header pagetitle="Home" />
    <v-content class="pt-0" v-scroll="onScroll" id="scroll-target">
      <v-container>
        <v-row no-gutters>
          <v-col
            xs="4"
            sm="2"
            v-for="(comp, index) in components"
            :key="index"
            class="pa-2 d-flex"
          >
            <router-link :to="comp.link" class="justify-center">
              <v-card
                class="mx-auto"
                width="100"
                height="100"
                elevation="2"
                outlined
                @click="check(comp.link, $event)"
              >
                <v-list-item
                  three-line
                  class="px-2"
                  align="center"
                  justify="center"
                  style="height:100%"
                >
                  <v-list-item-content>
                    <v-icon size="25px">{{ comp.icons }}</v-icon>
                    <v-list-item-subtitle
                      class="text-center font-weight-medium pt-1"
                      >{{ $t(comp.title) }}</v-list-item-subtitle
                    >
                    <span
                      v-if="comp.coming"
                      class="text-center pt-1"
                      style="color:blue; line-height:1; font-size:10px"
                      >Comming up</span
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
        <v-card>
          <v-row no-gutters class="pa-2 mt-2" style="overflow:hidden;">
            <FeaturedCourse />
          </v-row>
        </v-card>
        <div class="text-center mb-5">
          <v-btn
            color="white"
            depressed
            small
            class="ma-2"
            @click="shareAppLik()"
          >
            Share App
            <v-icon right dark>mdi-share</v-icon>
          </v-btn>
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
    <Footer active="home" />
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { cordovaMixin } from "@/mixins";
import * as appConfig from "@/config/index.config";
import FeaturedCourse from "./course/FeaturedCourse.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeList",
  mixins: [cordovaMixin],
  data: () => ({
    overlays: false,
    components: [
      {
        title: "Daily Update",
        icons: "mdi-newspaper",
        link: "/content"
      },
      {
        title: "NCERT Books",
        icons: "mdi-book-multiple",
        link: "/books"
      },
      {
        title: "Answer",
        icons: "mdi-cloud-question",
        link: "/answers"
      },
      {
        title: "Stay Motivated",
        icons: "mdi-lightbulb-group",
        link: "/content/motivation"
      },
      {
        title: "Discussions",
        icons: "mdi-account-group",
        link: "/community"
      },
      {
        title: "GK Lessons",
        icons: "mdi-lightbulb-on",
        link: "/content/general-knowledge?listype=grid"
      },
      {
        title: "Quiz Game",
        icons: "mdi-gamepad-variant",
        link: "/content/quizzes?listype=grid"
      },
      // {
      //   title: "Syllabus",
      //   icons: "mdi-order-bool-ascending-variant ",
      //   link: "/syllabus",
      //   coming: true
      // },
      {
        title: "Result Updates",
        icons: "mdi-book-open ",
        link: "/content/result-updates"
      },
      {
        title: "Topic Video",
        icons: "mdi-video-check",
        link: "/video",
        coming: true
      }
    ]
  }),
  components: {
    Header,
    Footer,
    FeaturedCourse
  },

  computed: {
    ...mapState({
      homeScroll: state => state.scroll.component.homelist
    })
  },

  methods: {
    ...mapActions({
      setHomeScroll: "scroll/setHomeScroll"
    }),
    check(url, event) {
      var selfref = this;
      if (url === "/community") {
        event.preventDefault();
        if (this.isCordova()) {
          let options = [
            "location=no",
            "footer=yes",
            "footercolor=#1565c0",
            "closebuttoncolor=#ffffff",
            "hardwareback=yes",
            "zoom=no",
            "clearsessioncache=no",
            "clearcache=no",
            "closebuttoncaption=Back to the Home"
          ];
          var ref = window.open(
            `${appConfig.webUrl}community/`,
            "_blank",
            options.join()
          );

          ref.addEventListener("loadstart", function(params) {
            selfref.overlays = true;
            if (params.url.includes("closeinappbrowser")) {
              ref.close();
              selfref.overlays = false;
            }
          });

          ref.addEventListener("loadstop", function() {
            selfref.overlays = false;
          });

          ref.addEventListener("loaderror", function() {
            selfref.overlays = false;
            alert("Oops!");
          });
        } else {
          window.location.href = `${appConfig.webUrl}community/`;
        }
      }
    },

    onScroll() {
      this.setHomeScroll({
        component: "homelist",
        axis: { x: 0, y: window.scrollY }
      });
    }
  },

  mounted() {
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
::-webkit-scrollbar {
  width: 0px;
}
.HomeList {
  scrollbar-width: none;
}
</style>
