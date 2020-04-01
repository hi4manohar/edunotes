<template>
  <v-app>
    <div class="">
      <v-toolbar :elevation="0" class="mt-2">
        <v-icon @click="showBoard" v-ripple>mdi-arrow-left</v-icon>
        <h1 class="title pl-2">
          Choose Your <span class="font-weight-bold blue--text">Class</span>
        </h1>
      </v-toolbar>
      <v-list three-line>
        <p class="text-center ma-0 pa-2 subtitle-1 font-weight-bold">
          Your class preference will help us to personalize your content.
        </p>
        <template v-for="item in items">
          <v-list-item
            :key="item.name"
            class="ma-2"
            @click="setHandleConfig(item.slug)"
            v-ripple
          >
            <!-- <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar> -->
            <div class="icon-avatar" style="margin-top:-8px;">
              <v-icon size="35" color="#5f4444">mdi-account-group</v-icon>
            </div>

            <v-list-item-content class="pl-2">
              <v-list-item-title v-html="item.name" class="font-weight-bold"></v-list-item-title>
              <v-list-item-subtitle
                style="line-height: 1.5;"
                v-html="item.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-overlay :value="overlays" opacity="0">
        <v-progress-circular color="blue" indeterminate size="32"></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { welcomeService } from '../../service/welcome.service';
import * as appConfig from "../../config/index.config";

export default {
  name: "chooseboard",
  props: ['board'],
  data: () => ({
    items: [],
    overlays: true,
    API_URL: appConfig.API_URL,
    iconFullPath: appConfig.API_URL + 'uploads/static/images/classicon/'
  }),
  created() {
    this.board ? '' : this.$emit("changesteps", "chooseboard");
    this.loadClass();
  },
  methods: {
    ...mapActions({
      showerror: "alert/error",
      setConfig: "user/setConfig"
    }),

    showBoard() {
      this.$emit("changesteps", "chooseboard");
    },

    setHandleConfig(classname) {
      this.overlays = true;
      this.setConfig({
        board: this.board,
        class: classname
      });
    },
    async loadClass() {
      try {
        let classList = await welcomeService.getclasslist();
        this.items = classList.data;
        this.overlays = false;
      } catch(err) {
        this.overlays = false;
        this.showerror(err);
      }
    }
  },
  computed: {
    ...mapState('user', ['token_id'])
  }
};
</script>

<style scoped>
.v-list-item {
  border: 1px solid #ddd;
  border-radius: 10px;
}
.v-list--three-line .v-list-item {
  min-height: 75px;
}
a {
  text-decoration: none;
}
.v-list {
  padding: 4px 16px;
}
</style>
