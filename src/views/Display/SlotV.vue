<template>
  <div>
    <SlotSingle></SlotSingle>
    <SlotSingle>AA</SlotSingle>
    <hr />
    <SlotName></SlotName>
    <hr />
    <SlotName>
      <div slot="aa">AA</div>
      <div>BB</div>
    </SlotName>
  </div>
</template>


<script>
import SlotName from '@/components/Display/SlotName'
import SlotSingle from '@/components/Display/SlotSingle'
export default {
  name: "SlotV",
  components: {
    SlotSingle,
    SlotName,
  },
}
</script>


<style scoped>

</style>