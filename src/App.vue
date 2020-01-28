<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="sendAjax">AJAX请求</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axois from './network/http.js';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    sendAjax(){
      axois.get("/api/hello/?name=hao");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
