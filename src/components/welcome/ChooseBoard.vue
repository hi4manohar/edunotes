<template>
  <v-app>
    <div class="">
      <v-toolbar :elevation="0" class="mt-2">
        <v-icon @click="showHome" v-ripple>mdi-arrow-left</v-icon>
        <h1 class="title pl-2 mt-2">
          Choose Your <span class="font-weight-bold blue--text">Board</span>
        </h1>
      </v-toolbar>
      <v-list three-line>
        <v-row>
          <v-col
            xs="3"
            sm="6"
            md="4"
            cols="12"
            v-for="item in items"
            :key="item.name"
            class="pa-2"
          >
            <template>
              <v-list-item @click="showClass(item.slug)">
                <v-list-item-avatar>
                  <v-img
                    v-if="item.slug"
                    :src="iconFullPath + '' + item.slug + '.jpg'"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-html="item.name"
                    class="font-weight-bold"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    style="line-height: 1.5;"
                    v-html="item.description"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-col>
        </v-row>
      </v-list>
      <v-overlay :value="overlays" opacity="0.02">
        <v-progress-circular
          color="blue"
          indeterminate
          size="32"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import * as appConfig from "../../config/index.config";
import { welcomeService } from "../../service/welcome.service";
import { mapActions } from "vuex";

export default {
  name: "ChooseBoard",
  data: () => ({
    publicPath: process.env.BASE_URL,
    items: {},
    overlays: true,
    API_URL: appConfig.API_URL,
    iconFullPath: appConfig.API_URL + "uploads/static/images/bordicon/"
  }),
  methods: {
    ...mapActions({
      showerror: "alert/error"
    }),

    showHome() {
      this.$emit("changesteps", "welcome");
    },
    showClass(board) {
      this.$emit("changesteps", "chooseclass", {
        board: board
      });
    },
    async loadBoard() {
      try {
        let boardList = await welcomeService.getBoardList();

        if (boardList.status === true) {
          this.items = boardList.data;
        } else {
          this.showerror(boardList.msg);
        }
        this.overlays = false;
      } catch (err) {
        this.overlays = false;
        this.showerror(err.message);
      }
    }
  },
  created() {
    this.loadBoard();
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
.v-list {
  padding: 4px 16px;
}
</style>
