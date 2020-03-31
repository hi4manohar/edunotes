<template>
  <v-app>
    <v-app-bar absolute color="green lighten-5" elevate-on-scroll>
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
        <div class="book-img pa-2">
          <v-img
            :src="bookDescription.reflink"
            width="100%"
            max-height="200px"
            class="mx-auto"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <br />
        <div class="class-article ml-2">
          <h3 class="mb-0">{{ bookDescription.post_title }}</h3>
          <p class="mb-2">H C Verma, S Chand</p>
          <p class="mb-2" v-html="bookDescription.post_content"></p>
        </div>
        <!-- if file type pdf -->
        <v-list-item
          class="px-2 mb-4 elevation-2 text-left"
          v-for="(item, index) in attachmentDetails"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-subtitle class="caption"
              >01:Chapter</v-list-item-subtitle
            >
            <v-list-item-title class="subtitle-2">{{
              item.post_title
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon title="view file">
            <a
              :href="
                'https://docs.google.com/gview?embedded=true&url=' +
                  item.reflink
              "
              target="_blank"
            >
              <v-btn icon color="primary"
                ><v-icon>mdi-file-pdf-outline </v-icon></v-btn
              >
            </a>
          </v-list-item-icon>
          <v-list-item-icon class="mx-0">
            <v-btn icon color="success"><v-icon>mdi-download</v-icon></v-btn>
          </v-list-item-icon>
        </v-list-item>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "BookDescription",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      bookDescription: null,
      attachmentDetails: []
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

      console.log(this.attachmentDetails);
    }
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
.book-img {
  background: #eee;
  border: 1px solid #ddd;
  max-width: 400px;
  margin: 0 auto;
}
.caption {
  line-height: 10px !important;
}
</style>
