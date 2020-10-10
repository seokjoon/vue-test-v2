const mixin = {
  name: 'mixin',
  data: () => ({
    mixinFoo: 'mixinFoo',
  }),
  methods: {
    getMixinFoo: function() {
      console.log(this.mixinFoo);
    },
  },
};

export default mixin;