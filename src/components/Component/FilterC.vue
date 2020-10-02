<template>
  <div>{{ foo | head | head(3) }}</div>
</template>


<script>
export default {
  name: "FilterC",
  data: () => ({
    foo: '012345678901234567890',
  }),
  filters: {
    head: (v, len = 10) => ((typeof v === 'string') ? v.substr(0, len) : v),
  },
}
</script>


<style scoped>

</style>