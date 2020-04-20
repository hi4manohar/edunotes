<template>
  <v-app>
    <div class="py-10 px-5 text-center">
      <h1 class="title">
        Welcome To <span class="font-weight-bold blue--text">{{ brandName }}</span>
      </h1>
      <p class="caption mb-10">
        A Helping hand to study effectively.
      </p>
      <v-carousel
        cycle
        height="375"
        :show-arrows="false"
        :hide-delimiter-background="true"
        interval="4000"
        :hide-delimiters="delimiter"
        :continuous="true"
        class="welcome-carousel"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img
            :src="API_URL + '' + item.src"
            height="190"
            position="0px 25px"
            overflow="hidden"
          ></v-img>
          <div class="slider-content mt-5 ms-2">
            <h2>{{ item.title }}</h2>
            <p style="font-size:14px;">{{ item.subtitle }}</p>
          </div>
        </v-carousel-item>
      </v-carousel>

      <v-btn fixed block color="primary" @click="showBoard">Get Started</v-btn>
      <v-overlay :value="overlays" opacity="0.02">
        <v-progress-circular
          color="blue"
          indeterminate
          size="32"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import { welcomeService } from "../../service/welcome.service";
import * as appConfig from "../../config/index.config";
import { mapActions } from "vuex";
export default {
  name: "Welcome",
  data() {
    return {
      overlays: true,
      API_URL: appConfig.API_URL,
      items: false,
      windowHeight: window.innerHeight,
      delimiter: window.innerHeight > 600 ? false : true,
      brandName: appConfig.brandName
    };
  },
  methods: {
    ...mapActions({
      showerror: "alert/error"
    }),
    showBoard() {
      this.$emit("changesteps", "chooseboard");
    }
  },
  async created() {
    try {
      let welcomeContent = await welcomeService.getWelcomeData();
      this.items = welcomeContent.data;
      this.overlays = false;
    } catch (err) {
      this.showerror(err);
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
.v-carousel {
  max-width: 500px;
  margin: 0 auto;
}
</style>
