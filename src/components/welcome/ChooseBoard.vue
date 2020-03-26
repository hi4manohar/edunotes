<template>
  <v-app>
    <div class="">
      <v-toolbar :elevation="0" class="mt-2">
        <v-icon @click="showHome" v-ripple>mdi-arrow-left</v-icon>
        <h1 class="title pl-2">
          Choose Your <span class="font-weight-bold blue--text">Board</span>
        </h1>
      </v-toolbar>
      <v-list three-line>
        <template v-for="item in items">
          <v-list-item :key="item.title" class="mb-2" @click="showClass">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </v-app>
</template>

<script>

import * as appConfig from "../../config/index.config";

export default {
  name: "ChooseBoard",
  data: () => ({
    publicPath: process.env.BASE_URL,
    items: {}
  }),
  methods: {
    showHome() {
      this.$emit("changesteps", "welcome");
    },
    showClass() {
      this.$emit("changesteps", "chooseclass");
    },
    loadBoard() {
      this.items = [
        {
          avatar: appConfig.API_URL + "uploads/static/images/bordicon/cbse.jpg",
          title: "CBSE",
          subtitle: "Central Board "
        },
        {
          avatar: appConfig.API_URL + "uploads/static/images/bordicon/icse.jpg",
          title: "ICSE",
          subtitle: "Foreign Board"
        },
        {
          avatar: appConfig.API_URL + "uploads/static/images/bordicon/bseb.jpg",
          title: "BSEB",
          subtitle: "Bihar Board"
        },
        {
          avatar: appConfig.API_URL + "uploads/static/images/bordicon/up.jpg",
          title: "UPMSP",
          subtitle: "Uttar Pradesh Madhyamik Shiksha Parishad"
        },
        {
          avatar: appConfig.API_URL + "uploads/static/images/bordicon/mp.jpg",
          title: "MPSC",
          subtitle: "Madhya Pradesh Board"
        }
      ];
    }
  },
  created() {
    this.loadBoard();
  }
};
</script>

<style scoped>
.v-list-item {
  border: 1px solid #ddd;
  border-radius: 10px;
}
.v-list--three-line .v-list-item {
  min-height: 75px;
}
.v-list {
  padding: 4px 16px;
}
</style>
