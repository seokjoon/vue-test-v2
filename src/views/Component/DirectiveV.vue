<template>
  <div>
    <div v-bind:class="{foo: isFoo, bar: isBar}">foo</div>
    <div v-bind:class="{foo: !(isBar)}">foo</div>
    <div v-bind:class="c1">foo</div>
    <div v-bind:style="{color: 'green'}">foo</div>
    <div v-bind:style="{border: (isBar ? '1px solid red' : ''), color: 'red'}">foo</div>
    <div v-bind:style="s1">foo</div>
  </div>
</template>


<script>
export default {
  name: "DirectiveV",
  computed: {
    c1: function() {
      return {
        c1: this.$data.isBar,
        c2: this.$data.isBar,
      }
    },
    s1: function () {
      return {
        border: (this.isBar) ? '1px solid green' : '',
        color: 'green',
      };
    },
  },
  created () {
    const self = this;
    setTimeout(() => { self.$data.isBar = false; }, 1000);
  },
  data: () => ({
    isFoo: true,
    isBar: true,
  }),
}
</script>


<style scoped>
.foo {
  color: #42b983;
}
.bar {
  color: coral;
}
.c1 {
  color: blueviolet;
}
.c2 {
  border: solid 1px blueviolet;
}

</style>