<template>
  <div>
    <div>{{ctr}}</div>
  </div>
</template>


<script>
export default {
  name: "DataV",
  created () {
    this.ctr++; //const self = this; setTimeout(function() { self.ctr++; }, 500);
  },
  data: () => ({ ctr: 0, }),
}
</script>


<style scoped>

</style>