import Vue from 'vue'
import Vuex from 'vuex'
import fooStore from '@/store/foo'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    setCtrAddAction(ctx) {
      ctx.commit('setCtrAdd', 1);
    }
  },
  getters: {
    getCtrSquare: (state) => state.ctr * state.ctr,
  },
  modules: {
    fooStore,
  },
  mutations: {
    setCtrAdd(state, inc) {
      if(typeof inc === "number") state.ctr += inc;
    },
  },
  state: {
    ctr: 0,
  },
})
