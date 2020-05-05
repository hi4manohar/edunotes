<template>
  <v-app :class="$options.name">
    <v-content class="pt-0">
      <div class="iframe-container" v-if="iframe">
        <iframe
          id="quizframe"
          style="width:100%; border:none;"
          :src="dsrc"
        ></iframe>
      </div>
    </v-content>
    <v-overlay :value="overlays" opacity="0.02">
      <v-progress-circular
        color="blue"
        indeterminate
        size="32"
      ></v-progress-circular>
    </v-overlay>
    <Footer active="ask" />
  </v-app>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import * as appConfig from "@/config/index.config";
import { cordovaMixin } from "@/mixins";

export default {
  name: "Ask",
  mixins: [cordovaMixin],
  components: {
    Footer
  },
  data: () => ({
    dsrc: `${appConfig.webUrl}community/`,
    iframe: true,
    overlays: false
  }),

  created() {
    if (this.$route.query.url) {
      this.iframe = false;
      this.dsrc = this.$route.query.url;
      this.inAppOpen();
    }
  },

  methods: {
    inAppOpen() {
      var selfref = this;
      if (this.isCordova()) {
        let options = [
          "location=no",
          "footer=yes",
          "footercolor=#1565c0",
          "closebuttoncolor=#ffffff",
          "hardwareback=yes",
          "zoom=no",
          "clearsessioncache=no",
          "clearcache=no",
          "closebuttoncaption=Back to the Home"
        ];
        var ref = window.open(this.dsrc, "_blank", options.join());

        ref.addEventListener("loadstart", function(params) {
          selfref.overlays = true;
          if (params.url.includes("closeinappbrowser")) {
            ref.close();
            selfref.overlays = false;
          }
        });

        ref.addEventListener("loadstop", function() {
          selfref.overlays = false;
        });

        ref.addEventListener("loaderror", function() {
          selfref.overlays = false;
          alert("Oops!");
        });

        ref.addEventListener("exit", function(event) {
          console.log(event);
          selfref.$router.push("/homelist");
        });
      } else {
        window.location.href = this.dsrc;
      }
    }
  }
};
</script>
<style scoped>
.v-content {
  margin-bottom: 52px !important;
  overflow: auto;
}
.iframe-container {
  background: url(https://edunotes.fresherscode.com/api/uploads/static/images/ajax-loader.gif)
    center center no-repeat;
  background-size: 200px;
}
iframe {
  height: calc(100vh - 16vw);
}
</style>
