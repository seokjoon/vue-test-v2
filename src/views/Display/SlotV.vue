<template>
  <div>
    <SlotBtn></SlotBtn>
    <SlotBtn>bar</SlotBtn>
  </div>
</template>


<script>
import SlotBtn from '@/components/Display/SlotBtn'
export default {
  name: "SlotV",
  components: { SlotBtn },
}
</script>


<style scoped>

</style>