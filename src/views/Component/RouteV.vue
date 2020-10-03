<template>
  <div>
    <router-link to="/about">About</router-link>
    <button @click="foo">Home</button>
    <router-view />
  </div>
</template>


<script>
import router from '@/router'

export default {
  name: "RouteV",
  beforeRouteEnter: (to, from, next) => { //console.log(to, from);
    next(vm => { vm.bar(); });
  },
  beforeRouteLeave: (to, from, next) => { next(); },
  beforeRouteUpdate: (to, from, next) => { next(); },
  methods: {
    bar() { console.log('bar'); },
    foo() {
      router.push({ name: 'Home', params: { bar: 'bar' } });
    },
  },
}
</script>


<style scoped>

</style>