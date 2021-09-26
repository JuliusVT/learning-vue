import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders:[]
  },
  mutations: {
    updateOrders(state, payload){
      state.orders = {...state.orders, ...payload};
    }
  },
  actions: {
  }
})
