<template>
  <div class="home">
    <home v-if="home" />
    <homedetails v-if="homedetails" />
  </div>
</template>

<script>
import homedetails from "@/components/mainapp/homedetails.vue";
import home from "@/components/mainapp/home.vue";

export default {
  name: "app",
  data: () => ({
    home: true,
    homedetails: false
  }),
  components: {
    homedetails,
    home
  },
  methods: {
    loadAll() {
      console.log(this.$route);
      this.home = this.$route.path === "/app" ? true : false;
      this.homedetails = this.$route.path === "/app/details" ? true : false;
    }
  },
  created() {
    this.loadAll();
  }
};
</script>
