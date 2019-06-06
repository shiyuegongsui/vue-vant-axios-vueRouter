import Vue from 'vue'
import axios from 'axios';
var isDev = process.env.NODE_ENV === 'development';


Vue.prototype.$authUrl =  "//occ.dazekeji.cn/auth/login?appkey=7E536B17CDF0D284404E96693DFE4D06";

Vue.prototype.$baseUrl = isDev ? "//test-api-xd.fjdaze.com/sc/selfcheck" : "//api.dazekeji.cn/sc/selfcheck";

var ajax = axios.create({
    baseURL: Vue.prototype.$baseUrl,
    timeout: 0
});

//ajax拦截器

ajax.interceptors.request.use(function (config) {
    
    config.headers = {
        'token': isDev ? 'ff90986f753c4fe39e6b7d01cbe62e61' : localStorage.getItem("wordCheck-code")
    }
    if (config.method == "get") {
        Object.assign(config.params, {
            time: new Date().getTime()
        });
    }
    return config;
})

ajax.interceptors.response.use(function (res) {

    switch (res.data.code) {
        case 200:
            return res.data;
            break;
        case 4000:
            location.href = Vue.prototype.$authUrl;
            return Promise.reject('未登录');
        default:
            return Promise.reject(res.data);
            break;
    }

}, function (error) {
    return Promise.reject('网络错误');

});

ajax.all = axios.all;
ajax.spread = axios.spread;


Vue.prototype.$ajax = ajax