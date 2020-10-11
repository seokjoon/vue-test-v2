<template>
  <div>
    <button @click="this.testStore">testStore</button>
    <button @click="this.testStoreFoo">testStoreFoo</button>
    <button @click="this.testStoreFooId">testStoreFooId</button>
  </div>
</template>


<script>
export default {
  name: "StoreV",
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
    },
    testStoreFooId() {
      console.log(this.$store.state.fooStore.id, this.$store.getters['fooStore/getId']);
      this.$store.dispatch('fooStore/redirectId', 5);
      console.log(this.$store.state.fooStore.id, this.$store.getters['fooStore/getId']);
    }
  },
}
</script>


<style scoped>

</style>