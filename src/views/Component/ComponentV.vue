<template>
  <div>
    <div>{{ foo }}</div>
    <ComponentChild v-bind:foo="foo" v-bind:bar="bar" v-on:setFoo="setFoo"></ComponentChild>
  </div>
</template>


<script>
import ComponentChild from '@/components/Component/ComponentChild'
export default {
  name: "ComponentV",
  components: { ComponentChild },
  data: () => ({
    foo: 'foo',
    bar: [ { k: 1 }, { k: 2 } ],
  }),
  methods: {
    setFoo(v) {
      this.foo = v;
    },
  },
}
</script>


<style scoped>

</style>