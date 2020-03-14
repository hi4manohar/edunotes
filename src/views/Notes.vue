<template>
  <v-app>
    <Header />
    <v-content class="pt-0">
      <v-container fluid >
        <v-card v-ripple class="mb-3" rounded-none>
          <v-list-item>
            <v-avatar class="mr-3" size="70" width="100"  tile>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/road.jpg"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2 mb-1">Hello This is notes of pysics</v-list-item-title>
              <v-list-item-subtitle class="caption">Notes Author Name</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card v-ripple class="mb-3">
          <v-list-item>
            <v-avatar class="mr-3" width="100" size="70" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/road.jpg"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2 mb-1">Hello This is notes of pysics</v-list-item-title>
              <v-list-item-subtitle class="caption">Notes Author Name</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-content>
    <Footer active="notes" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Notes",
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
.v-card{
  overflow: hidden;
  border-radius: 0px !important;
  box-shadow: none;
  border-bottom:1px solid #f3f3f3;
}
.v-list-item{
  padding:0px !important;
}
.v-card__title {
  font-size: 14px;
  padding: 5px 10px;
}
.v-card__subtitle {
  font-size: 11px;
  padding: 5px 10px;
}
</style>
