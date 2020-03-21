<template>
  <v-app>
    <div class="">
    <v-toolbar :elevation="0" class="mt-2">
      <v-icon @click="showBoard" v-ripple>mdi-arrow-left</v-icon>
      <h1 class="title pl-2">
        Choose Your <span class="font-weight-bold blue--text">Class</span>
      </h1>
    </v-toolbar>
    <v-list three-line>
      <template v-for="item in items">
        <v-list-item
          :key="item.title"
          class="mb-2"
          @click="setHandleConfig()"
          v-ripple
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "chooseboard",
  data: () => ({
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "8th",
        subtitle: "Central Board "
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "9th",
        subtitle: "Foreign Board"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "10th",
        subtitle: "Bihar Board"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "11th",
        subtitle: "Haryana Board"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "12th",
        subtitle: "Madhya Pradesh Board"
      }
    ]
  }),
  methods: {
    ...mapActions("user", ["setConfig"]),
    showBoard() {
      this.$emit("changesteps", "chooseboard");
    },
    setHandleConfig() {
      this.setConfig();
    }
  },
  computed: {
    // ...mapState('user', ['loggedIn'])
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
a {
  text-decoration: none;
}
.v-list {
  padding: 4px 16px;
}
</style>
