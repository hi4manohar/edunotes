<template>
  <div>
    <v-app-bar app clipped-right color="#1565C0" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" white />
      <v-toolbar-title title class="pl-0">{{ pagetitle }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="85%" app>
      <v-list-item dark class="left-drawer-header" style="height:100px;">
        <v-list-item-avatar tile height="45px" width="45px">
          <img :src="`${publicPath}img/logo/sidebar-logo.png`" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-1">
            {{ brandName }}
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle">
            A simplest learning Platform
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" @click="moveTo(i)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="subtitle-1"
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
  props: ["pagetitle"],
  name: "Header",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    item: 0,
    items: [
      { text: "Change Board", icon: "mdi-account-switch" },
      { text: "Change Class", icon: "mdi-account-cog-outline" },
      { text: "About Us", icon: "mdi-information-outline" },
      { text: "Notifications", icon: "mdi-bell-outline" }
      // { text: "Help", icon: "mdi-help-circle-outline" }
    ],
    publicPath: process.env.BASE_URL,
    brandName: appConfig.brandName
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

    moveTo(key) {
      if (key === 0 || key === 1) {
        if (this.user.status.loggedIn === true) {
          this.resetConfig();
          this.$router.push("/?start=board");
          window.location.reload(true);
          return;
        } else {
          this.$router.push("/");
          window.location.reload(true);
          return;
        }
      }

      if (key === 2) {
        this.$router.push("/about");
      } else if (key === 3) {
        this.$router.push("/notifications");
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
