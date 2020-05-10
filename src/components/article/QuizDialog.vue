<template>
  <div :class="$options.name">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ quizName }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="blue-grey lighten-5">
          <v-card class="iframe-container pa-2" elevation="2">
            <iframe
              id="quizframe"
              style="width:100%; height:88vh; border:none;"
              :src="dsrc"
            ></iframe>
          </v-card>
        </div>
      </v-card>
    </v-dialog>

    <v-card>
      <v-row no-gutters>
        <v-col
          v-for="(name, index) in names"
          @click="showContent(index, name.post_guid, name.post_title)"
          :key="index"
          cols="4"
          xs="4"
          sm="2"
          class="pa-2"
        >
          <v-card elevation="2">
            <v-img
              :src="name.guid"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="body-2 font-weight-bold"
                style="word-break: normal;"
                v-text="name.post_title"
              ></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["names", "articleCategory"],
  name: "QuizDialog",
  data: () => ({
    dialog: false,
    quizName: null,
    dsrc: null
  }),

  methods: {
    showContent(index, url, title) {
      if (this.articleCategory === "quizzes") {
        event.preventDefault();
        this.dialog = true;
        this.dsrc = url;
        this.quizName = title;
      } else {
        this.$router.push("/post/" + index);
      }
    }
  }
};
</script>

<style scoped>
.iframe-container {
  background: url(https://edunotes.fresherscode.com/api/uploads/static/images/ajax-loader.gif)
    center center no-repeat;
  background-size: 200px;
}
</style>
