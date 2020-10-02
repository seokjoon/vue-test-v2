<template>
  <div>{{ foo }}</div>
</template>


<script>
export default {
  name: "ComputedV",
  computed: {
    foo: function() {
      return this.v1 + this.v2;
    },
  },
  data: () => ({
    v1: 1,
    v2: 2,
  }),
}
</script>


<style scoped>

</style>