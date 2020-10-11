import router from '@/router'

const fooStore = {
  namespaced: true,
  actions: {
    redirectId(ctx, id) {
      ctx.commit('setId', id);
      router.push(`/data/store/${id}`);
    },
    setFooConcatAction(ctx) {
      ctx.commit('setFooConcat', 'bar');
    }
  },
  getters: {
    getFooUpper: (state) => state.foo.toUpperCase(),
    getId: (state, getters, rootState) => (Number(rootState.route.params.id)),
  },
  modules: {},
  mutations: {
    setFooConcat(state, str) {
      if(typeof str === "string") state.foo = state.foo.concat(str);
    },
    setId(state, id) {
      state.id = id;
    },
  },
  state: {
    foo: 'foo',
    id: 0,
  },
};

export default fooStore;