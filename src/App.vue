<template>
  <div class="main-view">
    <v-alert v-if="alert.type" :type="alert.type">{{ alert.message }}</v-alert>
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
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  },
  watch: {
    $route() {
      console.log(alert.message);
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>
<style src="./assets/css/globalApp.css"></style>
