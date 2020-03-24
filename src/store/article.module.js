import { articleService } from "../service/article.service";

const state = {
  articleList: [],
  subjectList: [],
  booksList: [],
  bookDetail: {}
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
  },

  async getBooksList({ dispatch, commit, state }) {
    if (!state.booksList.length) {
      try {
        let json = await articleService.getBooksList();
        if (json.status === true) commit("saveBooks", json.data);
      } catch (err) {
        console.log("error", err);
        dispatch("alert/error", err.msg, { root: true });
      }
    } else {
      console.log(state.articleList);
    }
  },

  async getBookDetail({ dispatch, commit, state }, param) {
    return new Promise((resolve, reject) => {
      if (!state.bookDetail || !state.bookDetail[param.bookid]) {
        try {
          articleService.getBookDetails(param).then(json => {
            param.detail = json.data;

            if (json.status === true) commit("saveBookDetail", param);

            resolve({
              status: true,
              data: param.detail
            });
          });
        } catch (err) {
          console.log("error", err);
          dispatch("alert/error", err.msg, { root: true });

          reject({
            status: false
          });
        }
      }
    });
  }
};
const mutations = {
  saveArticle(state, lists) {
    state.articleList = lists;
  },

  saveSubject(state, lists) {
    state.subjectList = lists;
  },

  saveBooks(state, lists) {
    state.booksList = lists;
  },

  saveBookDetail(state, param) {
    state.bookDetail[param.bookid] = param.detail;
  }
};
export const article = {
  namespaced: true,
  state,
  actions,
  mutations
};
