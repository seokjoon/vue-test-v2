<template>
  <div>
    <div>{{ctr}}</div>
  </div>
</template>


<script>
export default {
  name: 'DataC',
  created () {
    //const self = this; setTimeout(function() { self.ctr++; }, 500);
    this.ctr++;
  },
  data: () => ({ ctr: 0, }),
}
</script>


<style scoped>

</style>