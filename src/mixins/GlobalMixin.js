export const GlobalMixin = {
  name: 'GlobalMixin',
  data: () => ({
    globalFoo: 'globalFoo',
  }),
  methods: {
    getGlobalFoo: function() {
      console.log(this.globalFoo);
    },
  },
}