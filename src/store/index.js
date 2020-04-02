import Vue from "vue";
import Vuex from "vuex";
import { article } from "./article.module";
import { user } from "./user.module";
import { scroll } from "./scroll.module";
import { alert } from "./alert.module";
import { syllabus } from "./syllabus.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    article,
    user,
    scroll,
    alert,
    syllabus
  }
});
