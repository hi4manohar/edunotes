<template>
  <div class="py-10 px-5 text-center">
    <h1 class="title">
      Welcome To <span class="font-weight-bold blue--text">EduNotes</span>
    </h1>
    <p class="caption mb-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Scrambled it to make a type specimen book.
    </p>
    <v-carousel
      cycle
      height="250"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
      interval="2000"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="title">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  
    <v-btn fixed block color="primary" @click="showBoard">Get Started</v-btn>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
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
.v-btn{
  left:0px;
  border-radius: 0px;
  bottom:0px;
  height: 50px !important;
}
</style>
