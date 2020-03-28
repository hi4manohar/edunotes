<template>
  <v-app>
    <Header pagetitle="Books & Notes" />
    <v-content
      class="pt-0"
      v-scroll:#scroll-target="onScroll"
      id="scroll-target"
    >
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
          <v-row>
            <v-col cols="6" v-for="(item, index) in booksList" :key="index">
              <router-link :to="'/books/' + item.ID">
                <v-card>
                  <v-img
                    :src="item.guid"
                    width="100%"
                    max-height="90px"
                    class="mx-auto"
                  >
                  </v-img>
                  <v-card-title class="subtitle-2">{{
                    item.post_title
                  }}</v-card-title>
                  <v-card-subtitle class="pb-0">H C Verma 9th</v-card-subtitle>
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

export default {
  name: "Question",
  data: () => ({
    skloader: {
      loading: true,
      transition: "none",
      height: 72,
      type: "list-item-avatar-three-line"
    }
  }),
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

    onScroll(e) {
      this.setHomeScroll({
        component: "books",
        axis: { x: 0, y: e.target.scrollTop }
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
      this.container = document.getElementById("scroll-target");
      this.container.scrollTop = Number(this.homeScroll.y);
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
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
</style>
