<template>
  <v-app :class="$options.name">
    <v-app-bar fixed color="deep-orange lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-1">About Us</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="pa-4">
      <h4 class="title">{{ brandName }} Built in India for Students</h4>
      <ul>
        <li class="subtitle-2">
          We help you to quick find explanation about any topic at our digital
          platform.
        </li>
        <li class="subtitle-2">A Step by step guide to your study</li>
        <li class="subtitle-2">
          Structured content help you to be on track with your course timeline
        </li>
        <li class="subtitle-2">Your study notes by thousands of users</li>
        <li class="subtitle-2">Be it anywhere, start learning right away</li>
      </ul>
      <p class="subtitle-2">
        Loved this App? Rate 5 star on the Playstore, Help us by Sharing to Your
        Friends.
      </p>

      <div class="text-center">
        <v-btn color="primary" class="ma-2 white--text" @click="shareAppLik()">
          Share
          <v-icon right dark>mdi-share</v-icon>
        </v-btn>

        <a :href="marketUrl">
          <v-btn color="primary" class="ma-2 white--text">
            Rate
            <v-icon right dark>mdi-star</v-icon>
          </v-btn>
        </a>
      </div>
      <v-footer
        color="white lighten-1"
        class="d-flex justify-space-between py-2 px-5"
        fixed
      >
        <div class="text-center col col-12">
          <v-btn icon color="pink">
            <v-icon class="mr-2">mdi-heart</v-icon
            ><span class="text-capitalize">{{ brandName }} {{ appVersion }}</span>
          </v-btn>
        </div>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import * as appConfig from "../config/index.config";
import { cordovaMixin } from "../mixins";

export default {
  name: "About",
  mixins: [cordovaMixin],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      marketUrl: appConfig.appMarketUrl,
      appVersion: appConfig.appVersion,
      brandName: appConfig.brandName
    };
  }
};
</script>
<style scoped="">
.v-content {
  margin-top: 56px;
  padding: 10px;
  margin-bottom: 56px !important;
}
</style>
