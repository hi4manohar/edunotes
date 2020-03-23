<template>
  <v-app>
    <div class="py-10 px-5 text-center">
    <h1 class="title">
      Welcome To <span class="font-weight-bold blue--text">EduNotes</span>
    </h1>
    <p class="caption mb-10">
      A Helping hand to study effectively.
    </p>
    <v-carousel
      cycle
      height="300"
      :show-arrows="false"
      hide-delimiter-background
      interval="4000"
    >
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        
      </v-carousel-item>
    </v-carousel>

    <v-btn fixed block color="primary" @click="showBoard">Get Started</v-btn>
  </div>
  </v-app>
</template>

<script>
export default {
  name: "Welcome",
  data () {
      return {
        items: [
          {
            src: 'slider1.jpg',
          },
          {
            src: 'slider1.jpg',
          },
          {
            src: 'slider1.jpg',
          },
          {
            src: 'slider1.jpg',
          },
        ],
      }
    },
  methods: {
    showBoard() {
      this.$emit("changesteps", "chooseboard");
    }
  }
};
</script>

<style scoped>
.v-btn {
  left: 0px;
  border-radius: 0px;
  bottom: 0px;
  height: 50px !important;
}
.v-carousel{
  max-width: 500px;
  margin:0 auto;
}
</style>
