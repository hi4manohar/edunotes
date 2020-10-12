import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";

import { i18n } from "./plugins/i18n";
import axios from "axios";

Vue.config.productionTip = false;

store.$axios = axios;
Vue.prototype.$axios = axios;

axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function(error) {
    if (error.response.status === 440) {
      store.dispatch("alert/success", error.response.data.msg);
      store.dispatch("user/resetConfig");
    }
    // return Promise.reject(error);
  }
);

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
