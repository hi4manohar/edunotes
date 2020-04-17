<template>
  <div class="home">
    <Welcome v-if="welcome" v-on:changesteps="changeComponentStatus" />
    <ChooseBoard v-if="chooseboard" v-on:changesteps="changeComponentStatus" />
    <ChooseClass
      v-if="chooseclass"
      :board="board"
      v-on:changesteps="changeComponentStatus"
    />
    <Maintainance v-if="maintainance" />
    <UpgradeApp v-if="upgradeapp" />
  </div>
</template>

<script>
// @ is an alias to /src
import * as appConfig from "../config/index.config";
import Welcome from "@/components/welcome/Welcome.vue";
import ChooseBoard from "@/components/welcome/ChooseBoard.vue";
import ChooseClass from "@/components/welcome/ChooseClass.vue";
import Maintainance from "@/components/welcome/Maintainance.vue";
import UpgradeApp from "@/components/welcome/UpgradeApp.vue";
// import { welcomeService } from "../../service/welcome.service";
import { mapState, mapActions } from "vuex";
import { cordovaMixin } from "../mixins";
import { welcomeService } from "../service/welcome.service";

export default {
  name: "Home",
  mixins: [cordovaMixin],
  data: () => ({
    chooseboard: false,
    welcome: true,
    chooseclass: false,
    maintainance: false,
    upgradeapp: false,
    board: null
  }),
  components: {
    Welcome,
    ChooseBoard,
    ChooseClass,
    Maintainance,
    UpgradeApp
  },
  computed: {
    ...mapState("user", ["token_id"])
  },
  methods: {
    ...mapActions({
      showerror: "alert/error"
    }),

    changeComponentStatus(val, data) {
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
        this.board = data ? data.board : null;
      }
    },

    async loadApp() {
      //get app version
      if (this.isCordova()) {
        try {
          let appdetails = await welcomeService.getappdetails();

          if (appdetails.data.maintanance_mode === true) {
            this.welcome = false;
            this.maintainance = true;
            return "maintainance";
          }
          if (appdetails.data.published_app_version != appConfig.appVersion) {
            this.welcome = false;
            this.upgradeapp = true;
            return "upgradeapp";
          }
        } catch (err) {
          this.showerror(err);
        }
      }

      if (this.token_id) {
        return this.$router.push("/content");
      }
    }
  },
  created() {
    this.loadApp();

    if (this.$route.query.start && this.$route.query.start === "board") {
      this.changeComponentStatus("chooseboard");
    }
  }
};
</script>
