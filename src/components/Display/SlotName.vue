<template>
  <div>

    <div>
      <slot name="aa">aa</slot>
    </div>
    <div>
      <slot>bb</slot>
    </div>

  </div>
</template>


<script>
export default {
  name: "SlotSingle",
}
</script>


<style scoped>

</style>