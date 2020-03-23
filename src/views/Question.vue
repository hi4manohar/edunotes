<template>
  <v-app>
    <Header pagetitle="Books" />
    <v-content class="pt-0">
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <router-link :to="'/books/:name'">
              <v-card>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                  height="100px"
                >
                </v-img>
                <v-card-title>Physics</v-card-title>
                <v-card-subtitle>H C Verma</v-card-subtitle>
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

export default {
  name: "Question",
  data: () => ({}),
  components: {
    Header,
    Footer
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
.v-card__title {
  font-size: 14px;
  padding: 5px 10px;
  margin-bottom: 5px;
}
.v-card__subtitle {
  font-size: 11px;
  padding: 5px 10px;
  line-height: 12px;
}
</style>
