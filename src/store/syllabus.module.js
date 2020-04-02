import { articleService } from "../service/article.service";

const state = {
  syllabusArticleList: {},
  chapterArticle: []
};
const actions = {
  async syllabusArticleList({ dispatch, commit }, param) {
    return new Promise((resolve, reject) => {
      if (param && param.subject) {
        try {
          articleService.syllabusArticleList(param).then(json => {
            if (json.status === true) {
              param.data = json.data;

              if( param.data.length > 0 ) {
                commit("savesyllabusArticleList", param);
              } else {
                dispatch("alert/error", 'No Chapters Found', { root: true });
              }
              resolve(param.data);
            } else {
              reject(false);
            }
          });
        } catch (err) {
          dispatch("alert/error", err.msg, { root: true });
          reject(false);
        }
      } else {
        dispatch("alert/error", "Invalid Subject", { root: true });
        reject(false);
      }
    });
  },

  async getArticleByChapter({ dispatch, commit }, param) {

    return new Promise((resolve) => {

      if (param && param.chaptername) {
        try {
          articleService.getArticleByChapter(param).then(json => {

            if (json.status === true) {
              param.data = json.data;
              if( param.data.length > 0 ) {
                commit("saveChapterArticle", param);
                resolve(param.data);
              } else {
                dispatch("alert/error", 'No Chapters Found', { root: true });
              }
            } else {
              dispatch("alert/error", json.msg, { root: true });
            }
            resolve(null);

          });
          
        } catch (err) {
          dispatch("alert/error", err, { root: true });
          resolve(null)
        }
      } else {
        dispatch("alert/error", "Invalid Subject", { root: true });
        resolve(null);
      }

    })
    
  }
};
const mutations = {
  savesyllabusArticleList(state, param) {
    state.syllabusArticleList[param.subject] = param.data;
  },
  saveChapterArticle(state, param) {
    state.chapterArticle[param.chaptername] = param.data
  }
};

const getters = {
  getchapterArticle: (state) => (chaptername) => {
    return state.chapterArticle[chaptername];
  }
};

export const syllabus = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
