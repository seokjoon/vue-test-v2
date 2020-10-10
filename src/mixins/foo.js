export const FooMixin = {
  name: "FooMixin",
  data: () => ({
    fooMixinFoo: 'fooMixinFoo',
  }),
  methods: {
    getFooMixinFoo: function() {
      console.log(this.fooMixinFoo);
    },
  },
}