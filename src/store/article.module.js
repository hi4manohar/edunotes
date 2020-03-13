import { articleService } from "../service/article.service";

const state = {
    articleList: []
};
const actions = {
    async articleList({ commit, state }) {
        if (!state.articleList.length) {

            try {
                let json = await articleService.articleList();
                console.log(json);
                commit("saveArticle", json)
            } catch (err) {
                console.log('err', err);
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