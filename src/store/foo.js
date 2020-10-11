const fooStore = {
  namespaced: true,
  actions: {
    setFooConcatAction(ctx) {
      ctx.commit('setFooConcat', 'bar');
    }
  },
  getters: {
    getFooUpper: (state) => state.foo.toUpperCase(),
  },
  modules: {},
  mutations: {
    setFooConcat(state, str) {
      if(typeof str === "string") state.foo = state.foo.concat(str);
    }
  },
  state: {
    foo: 'foo',
  },
};

export default fooStore;