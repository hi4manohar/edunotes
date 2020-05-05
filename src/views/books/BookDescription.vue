<template>
  <v-app :class="$options.name">
    <v-app-bar fixed color="green lighten-5" elevate-on-scroll>
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 subtitle-1">Book Details</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pa-4">
      <div class="skloader" v-if="!bookDescription">
        <v-skeleton-loader
          :loading="true"
          transition-group="none"
          height="388"
          type="article, card-avatar"
        >
        </v-skeleton-loader>
      </div>

      <div class="description-container" v-if="bookDescription">
        <v-row>
          <v-col xs="12" sm="6">
            <div class="book-img pa-2">
              <v-img
                :src="bookDescription.reflink"
                width="100%"
                max-height="200px"
                class="mx-auto"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </v-col>
          <v-col xs="12" sm="6" class="pb-0">
            <div class="class-article ml-2 mt-4">
              <h3 class="mb-0">{{ bookDescription.post_title }}</h3>
              <div
                class="mb-3 mt-3 book-description"
                v-html="bookDescription.post_content"
              ></div>
            </div>
          </v-col>
        </v-row>
        <!-- if file type pdf -->
        <v-row>
          <v-col
            xs="3"
            sm="6"
            md="4"
            cols="12"
            v-for="(item, index) in attachmentDetails"
            :key="index"
            class="py-0"
          >
            <v-list>
              <a :href="item.reflink" target="_blank">
                <v-list-item class="elevation-2 text-left" @click="isCordova()">
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2">{{
                      item.post_title
                    }}</v-list-item-title>
                    <v-list-item-subtitle style="line-height: 1.5;">{{
                      item.post_content
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-icon title="view file">
                    <a
                      :href="`${pdfViewBaseUrl}${item.reflink}`"
                      target="_blank"
                      @click="
                        openPdfLink($event, `${pdfViewBaseUrl}${item.reflink}`)
                      "
                    >
                      <v-btn icon color="primary"
                        ><v-icon>mdi-file-pdf-outline </v-icon></v-btn
                      >
                    </a>
                  </v-list-item-icon>
                  <v-list-item-icon class="mx-0">
                    <a :href="item.reflink" target="_blank">
                      <v-btn icon color="success"
                        ><v-icon>mdi-download</v-icon></v-btn
                      >
                    </a>
                  </v-list-item-icon>
                </v-list-item>
              </a>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { cordovaMixin } from "@/mixins";

export default {
  name: "BookDescription",
  mixins: [cordovaMixin],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      bookDescription: null,
      attachmentDetails: [],
      pdfViewBaseUrl: "https://docs.google.com/gview?embedded=true&url="
    };
  },

  computed: {
    ...mapState({
      bookDetail: state => state.article.bookDetail
    })
  },

  methods: {
    ...mapActions({
      getBookDetail: "article/getBookDetail"
    })
  },

  created() {
    let bookid = this.$route.params.bookid;
    if (!this.bookDetail || !this.bookDetail[bookid]) {
      this.getBookDetail({ bookid: bookid }).then(response => {
        if (response.status) {
          response.data.forEach(item => {
            if (item.post_type === "post") {
              this.bookDescription = item;
            } else {
              this.attachmentDetails.push(item);
            }
          });
        }
      });
    } else {
      if (Array.isArray(this.bookDetail[bookid])) {
        this.bookDetail[bookid].forEach(item => {
          if (item.post_type === "post") {
            this.bookDescription = item;
          } else {
            this.attachmentDetails.push(item);
          }
        });
      }
    }
  }
};
</script>
<style scoped="">
.v-content {
  margin-top: 56px;
  overflow: auto;
  padding: 10px;
}
.book-img {
  background: #eee;
  border: 1px solid #ddd;
  max-width: 400px;
  margin: 0 auto;
}
.caption {
  line-height: 10px !important;
}
.book-description {
  white-space: pre-wrap;
  line-height: 0.8;
}
.v-list-item__title,
.v-list-item__subtitle {
  white-space: normal;
}
</style>
