import { answersService } from "../service/answers.service";

const state = {
  answersList: [],
  answersCount: true,
  answersTags: [],
  activeTagsIndex: false,
  activePage: 0,
};
const actions = {
  async answersList({ dispatch, commit }, param) {
    try {
      let json = await answersService.answersList(param);
      if (json.status === true) {
        if( json.data.length == 0 ) {
          dispatch("alert/error", "No any answers found", { root: true });
        }
        json.page = param.page;
        commit("saveAnswers", json);
      } else {
        dispatch("alert/error", "No more answers found", { root: true });
      }
    } catch (err) {
      console.log("err", err);
      dispatch("alert/error", err.msg, { root: true });
    }
  },
  saveActiveTagsIndex({commit}, index) {
    commit("setActiveTags", index);
  },
  setActivePage({commit}, page) {
    commit("saveActivePage", page);
  }
};
const mutations = {
  saveAnswers(state, json) {
    state.answersCount = json.data.length > 0 ? true : false;

    if (json.page > 0) {
      state.answersList.push(...json.data);
    } else {
      state.answersList = json.data;
    }

    if (!state.answersTags.length > 0) {
      state.answersTags = json.tags;
    }
  },

  setActiveTags(state, index) {
    state.activeTagsIndex = index;
  },

  saveActivePage(state, page) {
      state.activePage = page;
  }
};
export const answers = {
    namespaced: true,
    state,
    actions,
    mutations
};
