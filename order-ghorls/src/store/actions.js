export default {
  addOrder: ({ commit }, payload) => {
    commit("appendOrder", payload);
  }
};
