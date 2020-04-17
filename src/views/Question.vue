<template>
  <v-app>
    <Header pagetitle="Books & Notes" />
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
          <v-row v-if="booksList">
            <v-col cols="6" v-for="(item, index) in booksList" :key="index">
              <router-link :to="'/books/' + item.ID">
                <v-card height="170px">
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
        </div>
      </v-container>
    </v-content>
    <Footer active="question" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { mapState, mapActions } from "vuex";
import { skloaderMixin } from "../mixins";

export default {
  name: "Question",
  mixins: [skloaderMixin],
  data: () => ({}),
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapState({
      booksList: state => state.article.booksList,
      homeScroll: state => state.scroll.component.books
    })
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
  }
};
</script>
<style scoped="">
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
  overflow: auto;
}
</style>
