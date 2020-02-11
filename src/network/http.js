import axois from 'axios';
import $ from 'jquery';

axois.defaults.withCredentials = true;

axois.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

axois.interceptors.response.use(response => {
    console.log(response);
    if(!response.status){
        return response;
    }
    if(response.status === 303){
        window.location.href = response.data.redirect;
        return;
    }
    let status = response.status >= 200 && response.status < 300 || response.status===304;
    if(!status){
        alert("请求出错了："+response.statusText);
    }
    else {
        let data = response.data;
        if(!data.state){
            alert(data.msg);
        }
        return data;
    }
    return response;
}, error => {
    alert(error + JSON.stringify(error.config));
    if(error.response.status === 303){
        window.location.href = error.response.data.redirect;
        return;
    }
    return Promise.reject(error);
});

function generateHttp(urlPrefix){
    if(!urlPrefix){
        urlPrefix = "";
    }
    return {
        get(url, data, headers){
            let config = {};
            if($.isPlainObject(data)){
                config.params = data;
            }
            if($.isPlainObject(headers)){
                config.headers = headers;
            }
            return axois.get(urlPrefix+url, config);
        },
        post(url, data, headers){
            let config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            };
            if($.isPlainObject(data)) {
                config.data = data;
            }
            if($.isPlainObject(headers)){
                $.extend(config.headers, headers, true);
            }
            return axois.post(urlPrefix+url, config);
        }
    }
}

export default {
    install(Vue, options){
        let $http = null;
        if(!!options && options.hasOwnProperty("urlPrefix")){
            $http = generateHttp(options.urlPrefix);
        }
        else {
            $http = generateHttp();
        }
        Vue.prototype.$http = $http;
    }
};
