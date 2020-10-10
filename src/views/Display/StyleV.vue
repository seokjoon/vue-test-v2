<template>
  <div>
    <span class="foo">foo</span>
    <span class="bar">bar</span>
    <span :class="$style.fee">fee</span>
  </div>
</template>


<script>
export default {
  name: "StyleV",
}
</script>


<style scoped>
  .foo {
    color: #42b983;
  }
</style> <!-- local -->
<style>
  .bar {
    color: coral;
  }
</style> <!-- global -->
<style module>
  .fee {
    color: cornflowerblue;
  }
</style>
