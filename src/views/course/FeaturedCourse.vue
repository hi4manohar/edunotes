<template>
  <div :class="$options.name">
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zIwLWfaAg-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-responsive>
    </v-card>
    <v-divider></v-divider>
    <v-content class="pt-2">
      <div class="skloader" v-show="skloader.loading">
        <v-skeleton-loader
          :loading="skloader.loading"
          transition-group="none"
          height="388"
          type="article, card-avatar"
        >
        </v-skeleton-loader>
      </div>
      <div v-show="!skloader.loading">
        <h3 class="subtitle-1 font-weight-bold">{{ $t("Featured Course for You") }}</h3>
        <div class="slidercon">
          <div>
            <div class="sliderconin" :style="{ width: getsliderWidth }">
              <router-link
                :to="'/syllabus/chapters/' + item.post_name"
                v-for="(item, index) in articles"
                :key="index"
              >
                <v-card
                  elevation="1"
                  width="200"
                  overflow-x="hidden"
                  class="v-list-item--three-line"
                >
                  <v-img height="150" width="200" :src="item.guid"></v-img>
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
                          >399.00</span
                        >
                        <span class="pl-2 actualprice"
                          ><v-icon size="21">mdi-currency-inr</v-icon
                          >999.00</span
                        >
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </router-link>
            </div>
          </div>
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
    sliderWidth: "280",
    subjectname: null,
    articleCount: 5,
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
      },
      {
        post_title: "रासायनिक अभिक्रियाएँ एवं समीकरण",
        guid: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      }
    ]
  }),
  computed: {
    getsliderWidth() {
      return this.articleCount * this.sliderWidth + "px";
    }
  },

  created() {
    this.skloader.loading = false;
  }
};
</script>
<style scoped="">
.slidercon {
  max-width: 94vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0 auto;
}
.v-card {
  display: inline-block !important;
  margin: 10px !important;
}
::-webkit-scrollbar {
  width: 0px;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.actualprice {
  -webkit-text-decoration-line: line-through; /* Safari */
  text-decoration-line: line-through;
}
</style>
<style>
.FeaturedCourse .v-rating .v-icon {
  padding: 0;
}
</style>
