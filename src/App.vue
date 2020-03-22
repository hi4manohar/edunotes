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
    <router-view></router-view>
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
