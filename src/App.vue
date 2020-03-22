<template>
  <div class="main-view">
    <v-snackbar v-model="snackbar">
      {{ alert.message }}
      <v-btn
        color="pink"
        text
        @click="updatesnackbar(false)"
      >
        Close
      </v-btn>
    </v-snackbar>
    <transition
        name="slide-left"
        mode="out-in"
      >
    <router-view></router-view>
     </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    ...mapState({
      alert: state => state.alert
    }),

    snackbar() {
      return this.alert.type ? true : false;
    }
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    }),

    updatesnackbar(val) {
      this.alert.type = val;
    }
  },
  watch: {
    $route() {
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>
<style src="./assets/css/globalApp.css"></style>

<style type="text/css">
  
.slide-left-enter-active,
.slide-left-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.slide-left-enter,
.slide-left-leave-active {
  opacity: 0
}
</style>
