<template>
  <div>
    <div>{{ foo }}</div>
    <ul><li v-for="(v) in bar" v-bind:key="v.k">{{v.k}}</li></ul>
  </div>
</template>


<script>
export default {
  name: "ComponentChild",
  props: {
    foo: {
      type: String,
      default: 'foo',
      required: true,
      validator: () => true,
    },
    bar: {
      type: Array,
    },
  },
}
</script>


<style scoped>

</style>