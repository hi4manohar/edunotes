
<template>
  <v-app>
    <v-app-bar
      absolute
      color="green lighten-5"
      elevate-on-scroll>
        <v-btn icon light @click="$router.go(-1)">
          <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="pl-1 subtitle-1">Book Details</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="pa-4 text-center">
      <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" class="mx-auto"
    max-width="200"></v-img>
      <br>
      <h3 class="mb-0">Book Full Name</h3>
      <p class="mb-2">H C Verma, S Chand</p>
      
      <p class="mb-2">These will override the conventional class names. This is especially useful when you want to combine Vue’s transition system with an existing CSS animation library, such as Animate.css.</p>
      <br>
      <div class="text-center">
      	<v-btn rounded outlined color="indigo" class="mr-2">View</v-btn>
      	<v-btn rounded color="indigo" class="mr-2 white--text">Download</v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'BookDescription',
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
    padding:10px;
  }
</style>
