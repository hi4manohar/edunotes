import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";

import "./plugins/tiptap-vuetify";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
