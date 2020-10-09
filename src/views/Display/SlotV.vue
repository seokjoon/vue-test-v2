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
    <hr />
    <SlotScope v-bind:foo="foo"></SlotScope>
  </div>
</template>


<script>
import SlotName from '@/components/Display/SlotName'
import SlotSingle from '@/components/Display/SlotSingle'
import SlotScope from '@/components/Display/SlotScope'
export default {
  name: "SlotV",
  components: {
    SlotScope,
    SlotSingle,
    SlotName,
  },
  data: () => ({
    //items: [ { 'key':1, 'val': 'aa' }, { 'key':2, 'val': 'bb' } ],
    foo: 'foo',
  }),
}
</script>


<style scoped>

</style>