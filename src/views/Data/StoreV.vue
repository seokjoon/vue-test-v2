<template>
  <div>

  </div>
</template>


<script>
export default {
  name: "StoreV",
  created () {
    //this.testStore();
    this.testStoreFoo();
  },
  methods: {
    testStore() {
      console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
      this.$store.commit('setCtrAdd', 2);
      console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
      this.$store.dispatch('setCtrAddAction');
      console.log(this.$store.state.ctr, this.$store.getters.getCtrSquare);
    },
    testStoreFoo() {
      console.log(this.$store.state.fooStore.foo, this.$store.getters['fooStore/getFooUpper']);
      this.$store.commit('fooStore/setFooConcat', 'bar');
      console.log(this.$store.state.fooStore.foo, this.$store.getters['fooStore/getFooUpper']);
      this.$store.dispatch('fooStore/setFooConcatAction');
      console.log(this.$store.state.fooStore.foo, this.$store.getters['fooStore/getFooUpper']);
    }
  },
}
</script>


<style scoped>

</style>