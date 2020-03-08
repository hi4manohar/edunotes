<template>
  <div class="pa-5">
    <v-btn icon><v-icon @click="showHome">mdi-arrow-left</v-icon></v-btn>
    <h1 class="title text-center">
      Choose Your <span class="font-weight-bold blue--text">Board</span>
    </h1>
    <p class="caption  text-center">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <v-list three-line>
      <template v-for="item in items">
        <v-list-item :key="item.title" class="mb-2" @click="showClass">
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
</template>

<script>
export default {
  name: "ChooseBoard",
  data: () => ({
    items: [
      {
        avatar: "../Bordicon/CBSE.jpeg",
        title: "CBSE",
        subtitle: "Central Board "
      },
      {
        avatar: "../Bordicon/ICSE.jpg",
        title: "ICSE",
        subtitle: "Foreign Board"
      },
      {
        avatar: "../Bordicon/bseb.jpg",
        title: "BSEB",
        subtitle: "Bihar Board"
      },
      {
        avatar: "../Bordicon/UP.jpg",
        title: "UPMSP",
        subtitle: "Uttar Pradesh Madhyamik Shiksha Parishad"
      },
      {
        avatar: "../Bordicon/mp.jpg",
        title: "MPSC",
        subtitle: "Madhya Pradesh Board"
      }
    ]
  }),
  methods: {
    showHome() {
      this.$emit("changesteps", "welcome");
    },
    showClass() {
      this.$emit("changesteps", "chooseclass");
    }
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
</style>
