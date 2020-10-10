<template>
  <div>
    <button @click="getFoo">getFoo</button>
  </div>
</template>


<script>
import { FooMixin } from '@/mixins/FooMixin'

export default {
  name: "MixinV",
  mixins: [FooMixin],
}
</script>


<style scoped>

</style>