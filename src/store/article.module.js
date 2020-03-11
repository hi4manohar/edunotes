import { articleService } from "../service/article.service";

const state = {
  articleList: []
};
const actions = {
  articleList({ commit, state }) {

    if( !state.articleList.length ) {
      console.log('na')
      let json = articleService.articleList();
      commit("saveArticle", json);
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
