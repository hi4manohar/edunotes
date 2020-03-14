<template>
  <div class="home">
    <home v-if="home" />
    <homedetails v-if="homedetails" />
  </div>
</template>

<script>
import homedetails from "@/components/mainapp/homedetails.vue";
import home from "@/components/mainapp/home.vue";
import { mapState } from "vuex";

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
  computed: {
    ...mapState("user", ["token_id"])
  },
  methods: {
    loadAll() {
      console.log(this.$route);
      this.home = this.$route.path === "/app" ? true : false;
      this.homedetails = this.$route.path === "/app/details" ? true : false;
    }
  },
  created() {
    console.log("token", this.token_id);
    if (this.token_id) {
      this.router.push("/content");
    }
    this.loadAll();
  }
};
</script>
