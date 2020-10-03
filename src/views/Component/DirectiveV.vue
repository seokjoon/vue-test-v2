<template>
  <div>
    <input type="number" v-on:input="foo.ctr = $event.target.value" v-bind:value="foo.ctr" /> | <span>{{foo.ctr}}</span>
    <input type="number" v-on:change="foo.ctr = $event.target.value" v-bind:value="foo.ctr" /> | <span>{{foo.ctr}}</span>
    <button @click="foo.ctr++" :disabled="isBar">ctr++</button>
    <hr />
    <ul> <li v-for="(v) in ['foo', 'bar']" v-bind:key="v">{{v}}</li> </ul>
    <ul> <li v-for="(v, k) in ['foo', 'bar']" v-bind:key="k">{{k}} | {{v}}</li> </ul>
    <ul> <li v-for="(v) in [{'foo': 'foo'}, {'foo': 'bar'}]" v-bind:key="v.foo">{{v.foo}}</li> </ul>
    <hr />
    <p v-bind:class="{foo: isFoo, bar: isBar}">foo</p>
    <p v-bind:class="{foo: !(isBar)}">foo</p>
    <p v-bind:class="c1">foo</p>
    <p v-bind:style="{color: 'green'}">foo</p>
    <p v-bind:style="{border: (isBar ? '1px solid red' : ''), color: 'red'}">foo</p>
    <p v-bind:style="s1">foo</p>
    <hr />
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
    foo: {
      ctr: 0,
    },
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