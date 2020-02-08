import cookie from 'js-cookie';

export default {
    setCookie(name, value){
        cookie.set(name, value);
    },
    getCookie(name){
        return cookie.get(name);
    },
    removeCookie(name){
        cookie.remove(name);
    },
    setCookieFromUrl(href){
        let paramString = href.split("?");
        if(paramString.length < 2){
            return;
        }
        paramString = paramString[1];
        let params = paramString.split("&");
        for(let param of params){
            let item = param.split("=");
            if(item[0] === "SESSION" && item.length > 1){
                cookie.set(item[0], decodeURI(item[1]));
                break;
            }
        }
    }
}
