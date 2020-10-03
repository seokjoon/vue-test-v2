<template>
  <div>
    <ComponentChild v-bind:foo="foo" v-bind:bar="bar"></ComponentChild>
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
}
</script>


<style scoped>

</style>