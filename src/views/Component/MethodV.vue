<template>
  <div>
    <button @click="foo" >foo</button>
    <button @click="bar($event, 'foo')" >bar</button>
  </div>
</template>


<script>
export default {
  name: "MethodV",
  data: () => ({
    fee: 'fee',
  }),
  methods: {
    foo: function() { console.log('foo', this.fee); },
    bar: function($event, foo) { console.log($event); console.log(foo); },
  },
}
</script>


<style scoped>

</style>