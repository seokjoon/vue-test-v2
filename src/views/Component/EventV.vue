<template>
  <div>
    <div>{{ foo }}</div>
    <EventChild v-bind:foo="foo" v-bind:bar="bar" v-on:setFoo="setFoo"></EventChild>
  </div>
</template>


<script>
import EventChild from '@/components/Component/EventChild'
export default {
  name: "EventV",
  components: { EventChild },
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