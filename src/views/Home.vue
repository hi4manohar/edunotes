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
    welcome: false,
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

    turnComponent(c) {
      this.chooseboard = false;
      this.welcome = false;
      this.chooseclass = false;
      this.maintainance = false;
      this.upgradeapp = false;
      this[c] = true;
    },

    changeComponentStatus(val, data) {
      if (val === "chooseboard") {
        this.turnComponent("chooseboard");
      } else if (val === "welcome") {
        this.turnComponent("welcome");
      } else if (val === "chooseclass") {
        this.turnComponent("chooseclass");
        this.board = data ? data.board : null;
      }
    },

    async loadApp() {
      //get app version
      // if (this.isCordova()) {
      try {
        let appdetails = await welcomeService.getappdetails();

        if (appdetails.data.maintanance_mode === true) {
          this.turnComponent("maintainance");
          return "maintainance";
        }
        if (appdetails.data.published_app_version > appConfig.appVersion) {
          this.turnComponent("upgradeapp");
          return "upgradeapp";
        }

        if (this.$route.query.start && this.$route.query.start === "board") {
          this.changeComponentStatus("chooseboard");
        } else if (
          this.$route.query.start &&
          this.$route.query.start === "class"
        ) {
          try {
            let configs = JSON.parse(localStorage.getItem("configUser"));
            this.changeComponentStatus("chooseclass", {
              board: configs.userboard
            });
          } catch (err) {
            console.log("err", err);
            this.changeComponentStatus("chooseboard");
          }
        } else {
          this.loggedInComponent();
        }
      } catch (err) {
        this.showerror(err);
      }
      // }
    },

    loggedInComponent() {
      if (this.token_id) {
        if (this.notificationbar === false) {
          return this.$router.push("/homelist");
        }
      } else {
        this.welcome = true;
        return;
      }
    }
  },

  async mounted() {
    this.loadApp();
  }
};
</script>
