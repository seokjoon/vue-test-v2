<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <div id="navCom">
      <router-link to="/component/data">Data</router-link> |
      <router-link to="/component/filter">Filter</router-link> |
      <router-link to="/component/computed">Computed</router-link> |
      <router-link to="/component/directive">Directive</router-link> |
      <router-link to="/component/hook">Hook</router-link> |
      <router-link to="/component/method">Method</router-link> |
      <router-link to="/component/component">Component</router-link> |
      <router-link to="/component/route">Route</router-link> |
      <router-link to="/component/watch">Watch</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav, navCom {
  padding: 30px;
}

#nav, navCom a {
  font-weight: bold;
  color: #2c3e50;
}

#nav, navCom a.router-link-exact-active {
  color: #42b983;
}
</style>
