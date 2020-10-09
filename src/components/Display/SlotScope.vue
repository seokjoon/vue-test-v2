<template>
  <div>
      <slot v-bind:foo="foo">
        {{ foo }}
      </slot>
  </div>
</template>


<script>
export default {
  name: "SlotScope",
  props: {
    foo: {
      type: String,
    },
  },
}
</script>


<style scoped>

</style>