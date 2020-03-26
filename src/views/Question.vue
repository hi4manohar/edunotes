<template>
  <v-app>
    <Header pagetitle="Books & Notes" />
    <v-content class="pt-0">
      <v-container fluid>
        <v-row>
          <v-col cols="6" v-for="(item, index) in booksList" :key="index">
            <router-link :to="'/books/' + item.ID">
              <v-card>
                <v-img :src="item.guid" width="90" height="90px" class="mx-auto"> </v-img>
                <v-card-title class="subtitle-2">{{ item.post_title }}</v-card-title>
                <v-card-subtitle class="pb-0">H C Verma 9th</v-card-subtitle>
                <v-card-text class="text--primary caption">
                  <div>This is Paragraph details of this book</div>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
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
  data: () => ({}),
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapState({
      booksList: state => state.article.booksList
    })
  },

  methods: {
    ...mapActions({
      getBooksList: "article/getBooksList"
    })
  },

  created() {
    if (!this.booksList.length) {
      this.getBooksList();
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
