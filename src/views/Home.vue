<template>
  <div class="home">
    <welcome v-if="welcome" msg="Welcome to Your Vue.js App" />
    <chooseboard v-if="chooseboard" />
    <chooseclass v-if="chooseclass" />
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcome/welcome.vue";
import chooseboard from "@/components/welcome/chooseboard.vue";
import chooseclass from "@/components/welcome/chooseclass.vue";

export default {
  name: "Home",
  data: () => ({
    chooseboard: false,
    welcome: true,
    chooseclass: false
  }),
  components: {
    welcome,
    chooseboard,
    chooseclass
  },
  methods: {
    loadAll() {
      console.log(this.$route);
      switch (this.$route.params.viewtype) {
        case "chooseboard":
          this.welcome = false;
          this.chooseboard = true;
          this.chooseclass = false;
          break;
        case "chooseclass":
          this.welcome = false;
          this.chooseboard = false;
          this.chooseclass = true;
          break;
        default:
          this.welcome = true;
          this.chooseboard = false;
          this.chooseclass = false;
      }
    }
  },
  created() {
    this.loadAll();
  }
};
</script>
