<template>
  <v-app>
    <v-container>
      <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1">Choose Chapter</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div class="mt-10">
      <p class="text-center ma-0 pa-2">For webkit browsers, you can use the following pseudo elements to customize the</p>
    </div>
    <div class="slidercon">
      <div class="sliderconin" :style="{ width: getsliderWidth }">
        <v-card :elevation="5" width="260" v-for="(item, index) in 10" :key="index">
          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title class="py-2">01 Chapter</v-card-title>
          <v-card-text>
            <div class="subtitle-1">Real Number</div>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sliderWidth: '280',
    itemLength: 10,
  }),
  computed: {
    getsliderWidth() {
      return this.itemLength * this.sliderWidth + 'px';
    }
  }
};
</script>
<style scoped="">
  .slidercon{
    max-width:94vh;
    overflow: auto;
    margin:0 auto;
  }
  .v-card{
    display: inline-block !important;
    margin:10px !important;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
</style>
