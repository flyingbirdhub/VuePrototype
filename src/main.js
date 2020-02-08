// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import config from '@/config'
import './index.less'
import $ from 'jquery';
import $http from "@/network/http.js";
import $api from "@/network/api.js";
import cookie from "@/libs/cookie-util.js";
import {removeSessionFromUrl} from "@/libs/util.js";
cookie.setCookieFromUrl(window.location.href);
removeSessionFromUrl();

Vue.use(iView);
Vue.use($http, {urlPrefix: "/api"});
Vue.use($api);

/**
 * @description 全局注册应用配置
*/
Vue.prototype.$config = config;
Vue.prototype.$ = $;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
