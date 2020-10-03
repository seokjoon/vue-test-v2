<template>
  <div>
    {{ $route.path }} |
    <router-link to="/component/watch/foo">foo</router-link> |
    {{ foo }} | {{ bar }}
  </div>
</template>


<script>
export default {
  name: "WatchV",
  data: () => ({
    foo: 'foo',
    bar: 'bar',
  }),
  methods: {
    getBar: function() { console.log(this.$data.bar); },
  },
  mounted () {
    const self = this;
    setTimeout(() => {
      self.$data.foo = 'bar';
      self.$data.bar = 'foo';
    }, 500);
  },
  watch: {
    'foo': function(next, prev) { console.log(this.$data.foo, prev, next); },
    'bar': 'getBar',
    '$route': function(next, prev) { console.log(this.$route.path, prev, next); },
  },
}
</script>


<style scoped>

</style>