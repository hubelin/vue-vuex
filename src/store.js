import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    marketId: [10000],
    location: ["NY"],
    cards: [1]
  },
  mutations: {
    INCREMENT_CARD(state) {
      let newState = [...state.cards];
      newState[0] += 1;
      state.cards = newState;
    }
  },
  actions: {}
});
