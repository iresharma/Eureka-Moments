import Vue from "vue";
import Vuex from "vuex";
import FirebaseApp from "../firebaseConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      displayName: null,
      email: null,
      photoURL: null,
      score: 0,
    },
    question: 1,
    state: 1,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    INCREMENT_STATE: (state) => {
      state.state++;
      localStorage.setItem("qNum", `${state.question}.${state.state}`);
      FirebaseApp.db
        .collection("users")
        .doc(JSON.parse(localStorage.getItem("user")).uid)
        .update({
          score: state.user.score,
        });
    },
    DECREMENT_STATE: (state) => {
      state.state--;
      localStorage.setItem("qNum", `${state.question}.${state.state}`);
    },
    INCREMENT_QUES: (state) => {
      state.question++;
      state.state = 1;
      localStorage.setItem("qNum", `${state.question}.${state.state}`);
      localStorage.setItem("qNum", `${state.question}.${state.state}`);
    },
    INCREMENT_SCORE: (state) => {
      state.user.score++;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  actions: {},
  modules: {},
});
