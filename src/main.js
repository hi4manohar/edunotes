import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

Vue.config.productionTip = false;
import vuetify from "./plugins/vuetify";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
