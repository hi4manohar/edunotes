import { articleService } from "../service/article.service";

const state = {
  articleList: [],
  subjectList: [],
  booksList: [],
  bookDetail: {},
  articleCount: true,
  category: false
};
const actions = {
  async articleList({ dispatch, commit, state }, param) {
    if (state.category !== param.category || (param.page && param.page > 0)) {
      try {
        let json = await articleService.articleList(param);
        if (json.status === true) {
          commit("saveArticle", { lists: json.data, category: param.category });
          if (!json.data.length) {
            dispatch("alert/error", "More content not found.", { root: true });
          }
        }
      } catch (err) {
        console.log("err", err);
        dispatch("alert/error", err.msg, { root: true });
      }
    }
  },

  async setCategory({ commit, state }, category) {
    if (category !== state.category) {
      commit("setCategory", category);
    }
  },

  async subjectList({ dispatch, commit, state }) {
    if (!state.subjectList.length) {
      try {
        let json = await articleService.subjectList();
        if (json.status === true) {
          if (json.data.length == 0) {
            dispatch("alert/error", "No chapters found to Read.", {
              root: true
            });
          }
          commit("saveSubject", json.data);
        }
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
  saveArticle(state, { lists, category }) {
    state.articleCount = lists.length > 0 ? true : false;

    if (lists.length > 0) {
      if (state.category === category) {
        state.articleList.push(...lists);
      } else {
        state.category = category;
        state.articleList = lists;
      }
    } else {
      state.articleList.push(...lists);
    }
  },

  setCategory(state, category) {
    state.category = category;
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
