<template>
  <div>

  </div>
</template>


<script>
export default {
  name: "StoreV",
  created () {
    console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
    this.$store.commit('setCtrAdd', 2);
    console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
    this.$store.dispatch('setCtrAddAction');
    console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
  },
  methods: {
  },
}
</script>


<style scoped>

</style>