<template>
  <div>
    <v-app-bar app clipped-right color="#1565C0" dark v-bind:flat="flat">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" white />
      <v-toolbar-title title class="pl-0" style="text-transform: capitalize;">{{
        pagetitle
      }}</v-toolbar-title>
      <v-spacer />

      <v-btn icon @click="moveTo(2)">
        <v-badge color="green" content="0" overlap>
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="grey lighten-2">
            App Default Language
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-radio-group
                  v-model="radioval"
                  :disabled="false"
                  :readonly="false"
                  :mandatory="true"
                  :multiple="false"
                  color="blue"
                >
                  <v-radio value="hn" label="हिंदी - English "></v-radio>
                  <v-radio value="en" label="English"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              CANCEL
            </v-btn>
            <v-btn color="primary" text @click="changeLang()">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-navigation-drawer v-model="drawer" width="85%" app>
      <v-list-item dark class="left-drawer-header" style="height:100px;">
        <v-list-item-avatar tile height="45px" width="45px">
          <img :src="`${publicPath}img/logo/sidebar-logo.png`" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-1 font-weight-medium">
            {{ brandName }}
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle">
            A Free Learning Platform
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="moveTo(item.menuid)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="subtitle"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as appConfig from "../../config/index.config";

export default {
  props: ["pagetitle", "flat"],
  name: "Header",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    item: 0,
    items: [
      { text: "Change Board", icon: "mdi-account-switch", menuid: 0 },
      { text: "Change Class", icon: "mdi-account-cog-outline", menuid: 1 },
      { text: "Notifications", icon: "mdi-bell-outline", menuid: 2 },
      { text: "Change Default Language", icon: "mdi-ab-testing", menuid: 4 },
      { text: "Rate App 5 Star", icon: "mdi-star-half-full", menuid: 5 },
      { text: "About Us", icon: "mdi-information-outline", menuid: 3 }
    ],
    publicPath: process.env.BASE_URL,
    brandName: appConfig.brandName,
    marketUrl: appConfig.appMarketUrl,
    dialog: false,
    radioval: "en"
  }),

  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  methods: {
    ...mapActions({
      resetConfig: "user/resetConfig"
    }),

    changeLang() {
      try {
        let configs = JSON.parse(localStorage.getItem("configUser"));
        console.log("config", configs);
        configs.applang = this.radioval;
        localStorage.setItem("configUser", JSON.stringify(configs));
      } catch (err) {
        localStorage.setItem(
          "configUser",
          JSON.stringify({ applang: this.radioval })
        );
      }

      this.$i18n.locale = this.radioval;
      this.dialog = false;
    },

    moveTo(key) {
      if (key === 0 || key === 1) {
        if (this.user.status.loggedIn === true) {
          this.resetConfig();
          if (key === 0) this.$router.push("/?start=board");
          else this.$router.push("/?start=class");
          window.location.reload(true);
          return;
        } else {
          this.$router.push("");
          window.location.reload(true);
          return;
        }
      }

      if (key === 2) {
        this.$router.push("/notifications");
      } else if (key === 3) {
        this.$router.push("/about");
      }

      if (key === 4) {
        this.drawer = false;
        this.dialog = true;

        try {
          let configs = JSON.parse(localStorage.getItem("configUser"));
          if (configs && configs.applang) {
            this.radioval = configs.applang;
          } else {
            this.radioval = "hn";
          }
        } catch (err) {
          localStorage.setItem("configUser", JSON.stringify({ applang: "hn" }));
          this.radioval = "hn";
        }
      }

      if (key === 5) {
        console.log(this.marketUrl);
        window.location.href = this.marketUrl;
      }
    }
  }
};
</script>
<style scoped="">
.v-navigation-drawer {
  max-width: 300px;
}
.left-drawer-header {
  background: #1565c0;
}
</style>
