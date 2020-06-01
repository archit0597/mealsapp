import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mealCard: {},
    searchQuery: null,
    detailedMeal: null,
    searchResult: [],
    initstatus: true
  },
  mutations: {
    'MEAL_CARD'(state,payload){
      state.mealCard = payload
    },
    'SEARCH_QUERY'(state,payload){
      state.searchQuery = payload
    },
    'MEAL_DETAILS'(state,payload){
      state.detailedMeal = payload
    },
    'SEARCH_RESULT'(state,payload){
      state.searchResult = payload
    },
    'INIT_STATUS'(state,payload){
      state.initstatus = payload
    }
  },
  actions: {
    changeMealCard({commit},payload){
      commit('MEAL_CARD',payload)
    },
    changeSearchQuery({commit},payload){
      commit('SEARCH_QUERY',payload)
    },
    changeMealDetails({commit},payload){
      commit('MEAL_DETAILS',payload)
    },
    changeSearchResult({commit},payload){
      commit('SEARCH_RESULT',payload)
    },
    changeInitStatus({commit},payload){
      commit('INIT_STATUS',payload)
    }
  },
  getters:{
    mealCard: state => (state.mealCard),
    searchQuery: state => (state.searchQuery),
    detailedMeal: state => (state.detailedMeal),
    searchResult: state => (state.searchResult),
    initStatus: state => (state.initstatus)
  }
})
