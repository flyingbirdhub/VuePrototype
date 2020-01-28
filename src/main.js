import Vue from 'vue';
import App from './App.vue';

import axois from './network/http.js';

Vue.config.productionTip = false;

axois.get("/api/hello/?name=hao");

new Vue({
  render: h => h(App),
}).$mount('#app');
