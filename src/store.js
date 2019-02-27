import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marketId: 10000,
    location: '',
    totalCards: 0,
    markets: []
  },
  mutations: {
    INCREMENT_CARD(state) {
      let newState = [...state.cards]
      newState[0] += 1
      state.cards = newState
    },
    INCREMENT_MARKET_ID(state) {
      state.marketId += 1
    },
    ADD_MARKET(state, newMarket) {
      state.markets.push(newMarket)
    },
    SET_LOCATION(state, location) {
      state.location = location
    }
  },

  actions: {
    addMarket({ state, commit }) {
      const newMarket = {}
      if (state.location) {
        commit('INCREMENT_MARKET_ID')
        newMarket.marketId = state.marketId
        newMarket.location = state.location
        newMarket.cards = 1
        commit('ADD_MARKET', newMarket)
      }
    }
  }
})
