import { articleService } from "../service/article.service";

const state = {
  articleList: [],
  subjectList: []
};
const actions = {
  async articleList({ dispatch, commit, state }) {
    if (!state.articleList.length) {
      try {
        let json = await articleService.articleList();
        if (json.status === true) commit("saveArticle", json.data);
      } catch (err) {
        dispatch("alert/error", err.msg, { root: true });
      }
    } else {
      console.log(state.articleList);
    }
  },

  async subjectList({ dispatch, commit, state }) {
    if (!state.subjectList.length) {
      try {
        let json = await articleService.subjectList();
        if (json.status === true) commit("saveSubject", json.data);
      } catch (err) {
        console.log("error", err);
        dispatch("alert/error", err.msg, { root: true });
      }
    } else {
      console.log(state.articleList);
    }
  }
};
const mutations = {
  saveArticle(state, lists) {
    state.articleList = lists;
  },
  saveSubject(state, lists) {
    state.subjectList = lists;
  }
};
export const article = {
  namespaced: true,
  state,
  actions,
  mutations
};
