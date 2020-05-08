import Vue from "vue";
import VueI18n from "vue-i18n";
import { en } from "@/lang/en";
import { hn } from "@/lang/hn";
Vue.use(VueI18n);

var startLocale = "hn";

try {
  let configs = JSON.parse(localStorage.getItem("configUser"));
  if (configs && configs.applang) {
    startLocale = configs.applang;
  }
} catch (err) {
  localStorage.setItem("configUser", JSON.stringify({ applang: "hn" }));
}

export const i18n = new VueI18n({
  locale: startLocale,
  fallbackLocale: "en",
  messages: { en, hn }
});
