import { articleService } from "../service/article.service";

const state = {
  articleList: []
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
  }
};
const mutations = {
  saveArticle(state, lists) {
    state.articleList = lists;
  }
};
export const article = {
  namespaced: true,
  state,
  actions,
  mutations
};
