const state = {
  component: {
    home: {
      x: 0,
      y: 0
    },
    books: {
      x: 0,
      y: 0
    },
    subjectPosts: {
      x: 0,
      y: 0
    },
    answers: {
      x: 0,
      y: 0
    }
  }
};

const actions = {
  setHomeScroll({ commit }, { component, axis }) {
    commit("setScroll", { component, axis });
  }
};
const mutations = {
  setScroll(state, { component, axis }) {
    state.component[component] = axis;
  }
};
export const scroll = {
  namespaced: true,
  state,
  actions,
  mutations
};
