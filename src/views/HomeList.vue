<template>
  <v-app :class="$options.name">
    <Header pagetitle="Home" />
    <v-content class="pt-0">
      <v-container>
        <v-row>
          <v-col
            xs="3"
            cols="4"
            v-for="(comp, index) in components"
            :key="index"
            class="pa-2"
          >
            <router-link :to="comp.link">
              <v-card class="mx-auto" width="110" height="110" elevation="2" outlined>
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
                      >{{ comp.title }}</v-list-item-subtitle
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
        <div class="text-center mt-4">
          <v-btn depressed small class="ma-2" @click="shareAppLik()">
            Share App
            <v-icon right dark>mdi-share</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-content>
    <Footer active="home" />
  </v-app>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { cordovaMixin } from "../mixins";

export default {
  name: "HomeList",
  mixins: [cordovaMixin],
  data: () => ({
    components: [
      {
        title: "Daily Update",
        icons: "mdi-newspaper",
        link: "/content"
      },
      {
        title: "Books",
        icons: "mdi-book-multiple",
        link: "/question"
      },
      {
        title: "Answer",
        icons: "mdi-cloud-question",
        link: "/answers"
      },
      {
        title: "Syllabus",
        icons: "mdi-order-bool-ascending-variant ",
        link: "/syllabus"
      },
      {
        title: "Quiz Game",
        icons: "mdi-gamepad-variant",
        link: "/quiz",
        coming: true
      },
      {
        title: "Stay Motivated",
        icons: "mdi-lightbulb-group",
        link: "/content/motivation",
        coming: true
      },
      {
        title: "GK",
        icons: "mdi-lightbulb-on",
        link: "/gk",
        coming: true
      },
      {
        title: "Topic Video",
        icons: "mdi-video-check",
        link: "/video",
        coming: true
      },
      {
        title: "Community",
        icons: "mdi-account-group",
        link: "/community",
        coming: true
      }
    ]
  }),
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
}
</style>
