<template>
  <div :class="$options.name">
    <v-row justify="center">
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
    </v-row>
    <v-content class="pa-2">
      <div class="skloader" v-show="skloader.loading">
        <v-skeleton-loader
          :loading="skloader.loading"
          transition-group="none"
          height="100"
          type="article"
        >
        </v-skeleton-loader>
      </div>
      <div v-show="!skloader.loading">
        <h3 class="subtitle-1 font-weight-bold">
          {{ $t("Featured Course for You") }}
        </h3>
        <div class="slidercon">
          <v-row
            no-gutters
            class="flex-nowrap flex-md-wrap"
            style="overflow-y:scroll;"
          >
            <v-col
              xs="4"
              sm="4"
              md="3"
              @click="showContent($event, item.post_title)"
              v-for="(item, index) in articles"
              :key="index"
              class="pa-2 d-flex"
            >
              <v-card
                elevation="1"
                width="200"
                overflow-x="hidden"
                class="v-list-item--three-line ma-2 d-inline-block"
              >
                <v-img height="120" width="200" :src="item.guid"></v-img>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      class="subtitle-2 font-weight-medium"
                      >{{ item.post_title }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle>Rohan Keshav</v-list-item-subtitle>
                    <v-row class="pa-0 ma-0">
                      <v-col cols="6" class="pa-0 ma-0">
                        <v-rating
                          class="mt-1"
                          v-model="rating"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$ratingFull"
                          size="25"
                          value="4"
                          half-increments
                          hover
                          small
                          ><span class="pa-0"></span
                        ></v-rating>
                      </v-col>
                      <v-col cols="6" class="mt-2 pl-2 pa-0 ma-0">
                        <span>4.5</span>
                      </v-col>
                    </v-row>
                    <v-list-item-subtitle
                      class="subtitle-1 font-weight-bold mt-1"
                    >
                      <span class="title"
                        ><v-icon size="21">mdi-currency-inr </v-icon
                        >599.00</span
                      >
                      <span class="pl-2 actualprice"
                        ><v-icon size="21">mdi-currency-inr</v-icon>999.00</span
                      >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "FeaturedCourse",
  data: () => ({
    rating: 4.5,
    skloader: {
      loading: true
    },
    dialog: false,
    quizName: null,
    dsrc: null,
    sliderWidth: "220",
    subjectname: null,
    articles: [
      {
        post_title: "Class 10 Bihar Board Complete Maths in Hindi",
        guid: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      {
        post_title: "Class 10 Bihar Board Complete Science in Hindi",
        guid: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      {
        post_title: "Class 10 Bihar Board Complete Social Science in Hindi",
        guid: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      {
        post_title: "Class 10 Bihar Board Complete Sanskrit in Hindi",
        guid: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      }
    ]
  }),
  methods: {
    showContent(event, title) {
      event.preventDefault();
      this.dialog = true;
      this.dsrc =
        "https://www.fresherscode.com/edunotes-admin/course-enquiry-form/";
      this.quizName = title;
    }
  },

  mounted() {
    this.skloader.loading = false;
  }
};
</script>
<style scoped="">
::-webkit-scrollbar {
  width: 0px;
}
.FeaturedCourse {
  width: 100%;
  scrollbar-width: none;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.actualprice {
  -webkit-text-decoration-line: line-through; /* Safari */
  text-decoration-line: line-through;
}
.iframe-container {
  background: url(https://edunotes.fresherscode.com/api/uploads/static/images/ajax-loader.gif)
    center center no-repeat;
  background-size: 200px;
}
</style>
<style>
.FeaturedCourse .v-rating .v-icon {
  padding: 0;
}
</style>
