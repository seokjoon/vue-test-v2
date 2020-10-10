<template>
  <div>
    <button @click="getFooMixinFoo">getFooMixinFoo</button>
    <button @click="getMixinFoo">getMixinFoo</button>
  </div>
</template>


<script>
import { FooMixin } from '@/mixins/foo'

export default {
  name: "MixinV",
  mixins: [FooMixin],
}
</script>


<style scoped>

</style>