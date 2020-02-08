import UserInfoApi from "./apis/api-user-info.js";

function addApi(target, apis){
    for(let name in apis){
        if(target.hasOwnProperty(name)){
            throw "api:"+name+"重复了";
        }
        target[name] = "/user" + UserInfoApi[name];
    }
    return target;
}

let api = {};
addApi(api, UserInfoApi);

export default {
    install(Vue){
        Vue.prototype.$api = api;
    }
};
