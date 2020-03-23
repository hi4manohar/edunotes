<template>
  <v-app>
    <v-app-bar absolute color="amber lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-2"
        >01 | Chemical reactions and equations</v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="pa-4">
      <h4>Q.Chemical reactions and equations tions and equations?</h4>
      <p>
        Ans.Material Design Icons' growing icon collection allows designers and
        developers targeting various platforms to download icons in the format,
        color and size they need for any project.
      </p>
      <v-img
        src="https://picsum.photos/510/300?random"
        aspect-ratio="1.7"
      ></v-img>
      <br />
      <p>
        Material Design Icons' growing icon collection allows designers and
        developers targeting various platforms to download icons in the format,
        color and size they need for any project.
      </p>

      <p>
        Material Design Icons' growing icon collection allows designers and
        developers targeting various platforms to download icons in the format,
        color and size they need for any project.
      </p>
    </v-content>
    <v-footer fixed class="font-weight-medium d-flex justify-space-between">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <div>
        <v-btn icon disabled>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <p>01/10</p>
        <v-btn icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-btn icon>
        <v-icon>mdi-share-all-outline </v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "ChapterPosts",
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
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
  padding: 10px;
}
.v-toolbar {
  background: #fffce5 !important;
}
.v-footer {
  padding: 10px;
}
.v-footer p {
  display: inline-block;
  width: 70px;
  text-align: center;
  margin-bottom: 0px;
}
</style>
