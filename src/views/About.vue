<template>
  <v-app>
    <v-app-bar absolute color="deep-orange lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-1">About Us</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="pa-4">
      <v-img
        src="https://picsum.photos/510/300?random"
        aspect-ratio="1.7"
      ></v-img>
      <br />
      <h4 class="text-center">Edunotes built in india for student</h4>
      <ul>
        <li>We Started Groww in 2020 to make student simplest way to learn.</li>
        <li>We are providing all boards syllabus.</li>
        <li>Also Providing notes of your nearby teachers.</li>
      </ul>
      <p>Send Us Your Feedback On info@edunotes.com</p>
      <br />
      <br />
      <p class="text-center"><strong>v1.00</strong><br />App Updated</p>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null
    };
  }
};
</script>
<style scoped="">
.v-content {
  margin-top: 56px;
  height: calc(100vh - 56px);
  overflow: auto;
  padding: 10px;
}
</style>
