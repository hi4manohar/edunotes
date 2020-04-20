<template>
  <v-app :class="$options.name">
    <v-app-bar fixed color="primary">
      <v-btn icon dark @click="$router.go(-1)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title style="color: white;">Answer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="dialog = false" class="text-capitalize"
          >Submit</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-container>
      <v-content>
        <EditorContainer />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import EditorContainer from "@/components/forum/EditorContainer.vue";
export default {
  name: "WriteAnswer",
  components: {
    EditorContainer
  },
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>

<style scoped>
.v-content {
  margin-top: 56px;
}
</style>
