import { articleService } from "../service/article.service";

const state = {
  syllabusArticleList: {}
};
const actions = {
  async syllabusArticleList({ dispatch, commit }, param) {

    return new Promise(( resolve, reject ) =>  {

      if ( param && param.subject) {
        try {
          articleService.syllabusArticleList(param).then(json =>  {
            
            if (json.status === true) {
              param.data = json.data;
              commit("savesyllabusArticleList", param);
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
        dispatch("alert/error", 'Invalid Subject', { root: true });
        reject(false);
      }

    })
  }
};
const mutations = {
  savesyllabusArticleList(state, param) {
    state.syllabusArticleList[param.subject] = param.data;
  }
};
export const syllabus = {
  namespaced: true,
  state,
  actions,
  mutations
};
