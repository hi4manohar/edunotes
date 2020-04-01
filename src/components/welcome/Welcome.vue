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
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="API_URL + '' + item.src">
        </v-carousel-item>
      </v-carousel>

      <v-btn fixed block color="primary" @click="showBoard">Get Started</v-btn>
      <v-overlay :value="overlays" opacity="0.02">
        <v-progress-circular color="blue" indeterminate size="32"></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import * as appConfig from "../../config/index.config";
import { welcomeService } from '../../service/welcome.service';
import { mapActions } from "vuex";
export default {
  name: "Welcome",
  data() {
    return {
      overlays: true,
      API_URL: appConfig.API_URL,
      items: false
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
    } catch(err) {
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
