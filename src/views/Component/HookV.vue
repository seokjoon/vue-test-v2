<template>
  <div>

  </div>
</template>


<script>
export default {
  name: "HookV",
  beforeCreate () { console.log('beforeCreate'); },
  created () { console.log('created'); },
  beforeMount () { console.log('beforeMount'); },
  mounted () { console.log('mounted'); },
  beforeUpdate () { console.log('beforeUpdate'); },
  updated () { console.log('updated'); },
  beforeDestroy () { console.log('beforeDestroy'); },
  destroyed () { console.log('destroyed'); },
}
</script>


<style scoped>

</style>