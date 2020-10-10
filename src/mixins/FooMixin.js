export const FooMixin = {
  name: "FooMixin",
  data: () => ({
    foo: 'foo',
  }),
  methods: {
    getFoo: function() {
      console.log(this.foo);
    },
  },
}