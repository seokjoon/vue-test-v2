<template>
  <div>
    <input type="text" @input="fooChild = $event.target.value" :value="fooChild" /> | <button v-on:click="setFoo">setFoo</button>
    <hr />
    <div>{{ foo }}</div>
    <ul><li v-for="(v) in bar" v-bind:key="v.k">{{v.k}}</li></ul>
  </div>
</template>


<script>
export default {
  name: "ComponentChild",
  data: () => ({
    fooChild: '',
  }),
  methods: {
    setFoo() {
      this.$emit('setFoo', this.fooChild);
    },
  },
  props: {
    foo: {
      type: String,
      default: 'foo',
      required: true,
      validator: () => true,
    },
    bar: {
      type: Array,
    },
  },
}
</script>


<style scoped>

</style>