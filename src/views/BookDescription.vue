
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
      <div class="book-img pa-2">
        <v-img src="https://picsum.photos/510/300?random"></v-img>
      </div>
      <br>
      <h3 class="mb-0">Book Full Name</h3>
      <p class="mb-2">H C Verma, S Chand</p>
      <p class="mb-2">These will override the conventional class names. This is especially useful when .</p>
      <!-- if file type pdf -->
      <v-list-item class="px-2 mb-2 elevation-2 text-left">
         <v-list-item-content>
          <v-list-item-title class="subtitle-2">01. This is Title of Book</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon title="view file">
          <v-btn icon color="primary"><v-icon>mdi-file-pdf-outline </v-icon></v-btn>
        </v-list-item-icon>
        <v-list-item-icon>
          <v-btn icon color="success"><v-icon>mdi-download</v-icon></v-btn>
        </v-list-item-icon>
      </v-list-item>
      <!-- if file type video -->
      <v-list-item class="px-2 mb-2 elevation-2 text-left">
         <v-list-item-content>
          <v-list-item-title class="subtitle-2">02. This is Title of Book</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon title="view file">
          <v-btn icon color="primary"><v-icon>mdi-video-outline  </v-icon></v-btn>
        </v-list-item-icon>
        <v-list-item-icon>
          <v-btn icon color="success"><v-icon>mdi-download</v-icon></v-btn>
        </v-list-item-icon>
      </v-list-item>
      <!-- if file type image -->
      <v-list-item class="px-2 mb-2 elevation-2 text-left">
         <v-list-item-content>
          <v-list-item-title class="subtitle-2">03. This is Title of Book</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon title="view file">
          <v-btn icon color="primary"><v-icon>mdi-file-image-outline</v-icon></v-btn>
        </v-list-item-icon>
        <v-list-item-icon>
          <v-btn icon color="success"><v-icon>mdi-download </v-icon></v-btn>
        </v-list-item-icon>
      </v-list-item>
      <!-- <br>
      <div class="text-center">
      	<v-btn rounded outlined color="indigo" class="mr-2">View</v-btn>
      	<v-btn rounded color="indigo" class="mr-2 white--text">Download</v-btn>
      </div> -->
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
  .book-img{
    background: #eee;
    border:1px solid #ddd;
  }
</style>
