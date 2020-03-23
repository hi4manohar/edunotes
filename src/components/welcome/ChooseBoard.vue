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
          avatar: this.publicPath + "Bordicon/CBSE.jpg",
          title: "CBSE",
          subtitle: "Central Board "
        },
        {
          avatar: this.publicPath + "Bordicon/ICSE.jpg",
          title: "ICSE",
          subtitle: "Foreign Board"
        },
        {
          avatar: this.publicPath + "Bordicon/bseb.jpg",
          title: "BSEB",
          subtitle: "Bihar Board"
        },
        {
          avatar: this.publicPath + "Bordicon/UP.jpg",
          title: "UPMSP",
          subtitle: "Uttar Pradesh Madhyamik Shiksha Parishad"
        },
        {
          avatar: this.publicPath + "Bordicon/mp.jpg",
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
