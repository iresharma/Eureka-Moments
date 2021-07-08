import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      displayName: null,
      email: null,
      photoURL: null,
    },
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
  },
  actions: {},
  modules: {},
});
