<template>
  <div class="home">
    <welcome v-if="welcome" msg="Welcome to Your Vue.js App" />
    <chooseboard v-if="chooseboard" />
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcome/welcome.vue";
import chooseboard from "@/components/welcome/chooseboard.vue";

export default {
  name: "Home",
  data: () => ({
    chooseboard: false,
    welcome: true
  }),
  components: {
    welcome,
    chooseboard
  },
  methods: {
    loadAll() {
      console.log(this.$route);
      this.chooseboard =
        this.$route.path === "/home/chooseboard" ? true : false;
      this.welcome = this.$route.path === "/home/chooseboard" ? false : true;
    }
  },
  created() {
    this.loadAll();
  }
};
</script>
