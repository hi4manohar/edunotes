import { userService } from "../service/index.service";
import { router } from "../router/index";

const token_id = localStorage.getItem("token_id");

const state = token_id
  ? {
      status: {
        loggedIn: true
      },
      token_id: token_id
    }
  : {
      status: {},
      token_id: null
    };

const actions = {
  async setConfig({ dispatch, commit }, param) {
    try {
      if (param.board && param.class) {
        var configStatus = await userService.setConfig(param);
      } else throw "Preference not configured";
      if (configStatus.status === true) {
        localStorage.setItem("token_id", configStatus.data);
        commit("loginSuccess", configStatus.data);
        router.push("/content");
      }
    } catch (err) {
      dispatch("alert/error", err.msg);
      console.log("rrr", err);
    }
  },

  async resetConfig({ commit }) {
    localStorage.clear();
    commit("resetLogin");
    router.push("/");
  }
};
const mutations = {
  loginSuccess(state, token_id) {
    state.status = { loggedIn: true };
    state.token_id = token_id;
  },

  resetLogin(state) {
    state.status.loggedIn = false;
    state.token_id = null;
  }
};
export const user = {
  namespaced: true,
  state,
  actions,
  mutations
};
