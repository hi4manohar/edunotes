<template>
  <div class="home">
    <Welcome v-if="welcome" v-on:changesteps="changeComponentStatus" />
    <ChooseBoard v-if="chooseboard" v-on:changesteps="changeComponentStatus" />
    <ChooseClass v-if="chooseclass" v-on:changesteps="changeComponentStatus" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/welcome/Welcome.vue";
import ChooseBoard from "@/components/welcome/ChooseBoard.vue";
import ChooseClass from "@/components/welcome/ChooseClass.vue";

export default {
  name: "Home",
  data: () => ({
    chooseboard: false,
    welcome: true,
    chooseclass: false
  }),
  components: {
    Welcome,
    ChooseBoard,
    ChooseClass
  },
  methods: {
    changeComponentStatus(val) {
      if (val === "chooseboard") {
        this.chooseboard = true;
        this.welcome = false;
        this.chooseclass = false;
      } else if (val === "welcome") {
        this.chooseboard = false;
        this.welcome = true;
        this.chooseclass = false;
      } else if (val === "chooseclass") {
        this.chooseboard = false;
        this.welcome = false;
        this.chooseclass = true;
      }
    }
  },
  created() {
    console.log("params", this.params);
  }
};
</script>
