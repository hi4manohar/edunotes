<template>
  <v-app :class="$options.name" class="blue-grey lighten-5">
    <Header pagetitle="Books & Notes" :flat="true" />
    <v-toolbar
      color="#1565C0"
      dark
      flat
      dense
      mobile-break-point="0"
      show-arrows="false"
      class="flex-grow-0"
      fixed="true"
    >
      <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          fixed-tabs
          slider-color="white"
          prevIcon="false"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            @click="$router.push('/books?type=' + item)"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-content class="pt-0" v-scroll="onScroll" id="scroll-target">
      <v-container fluid>
        <div class="skloader" v-if="skloader.loading">
          <v-list-item v-for="n in 3" :key="n" class="pa-0">
            <v-list-item-content>
              <v-skeleton-loader
                :loading="skloader.loading"
                :transition="skloader.transition"
                :height="skloader.height"
                :type="skloader.type"
              >
              </v-skeleton-loader>
            </v-list-item-content>
          </v-list-item>
        </div>

        <div class="item-container" v-else>
          <v-card>
            <v-row v-if="booksList" no-gutters>
              <v-col
                class="pa-2"
                cols="6"
                xs="6"
                sm="3"
                md="2"
                v-for="(item, index) in filteredBookList"
                :key="index"
              >
                <router-link :to="'/books/' + item.ID">
                  <v-card
                    height="170px"
                    outlined
                    class="v-list-item--three-line d-inline-block"
                  >
                    <div class="img-container" style="height:90px;">
                      <v-img
                        :src="item.guid ? item.guid : ''"
                        width="100%"
                        max-height="90px"
                        class="mx-auto"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="black lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </div>
                    <v-list-item three-line min-height="73px">
                      <v-list-item-subtitle
                        class="subtitle-1 pb-0"
                        style="max-width: 150px;"
                      >
                        {{ item.post_title }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </v-content>
    <Footer active="books" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { mapState, mapActions } from "vuex";
import { skloaderMixin } from "@/mixins";
import underscore from "underscore";

export default {
  name: "Books",
  mixins: [skloaderMixin],
  data: () => ({
    currentItem: 0,
    items: ["books", "solutions"]
  }),
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapState({
      booksList: state => state.article.booksList,
      homeScroll: state => state.scroll.component.books
    }),

    filteredBookList: {
      get() {
        if (this.$route.query.type === "solutions") {
          return underscore.filter(this.booksList, function(arr) {
            return (
              arr.post_title.includes("Solution") ||
              arr.post_title.includes("solution")
            );
          });
        } else {
          return underscore.filter(this.booksList, function(arr) {
            return !(
              arr.post_title.includes("Solution") ||
              arr.post_title.includes("solution")
            );
          });
        }
      }
    }
  },

  methods: {
    ...mapActions({
      getBooksList: "article/getBooksList",
      setHomeScroll: "scroll/setHomeScroll"
    }),

    onScroll() {
      this.setHomeScroll({
        component: "books",
        axis: { x: 0, y: window.scrollY }
      });
    }
  },

  watch: {
    booksList: function(n) {
      if (n.length > 0) {
        this.skloader.loading = false;
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, Number(this.homeScroll.y));
    });
  },

  created() {
    if (!this.booksList.length) {
      this.getBooksList();
    } else {
      this.skloader.loading = false;
    }

    if (this.$route.query.type === "solutions") {
      this.currentItem = 1;
    }
  }
};
</script>
<style scoped="">
.v-content {
  margin-bottom: 56px !important;
  overflow: auto;
}
.v-slide-group__prev--disabled {
  display: none;
}
</style>
