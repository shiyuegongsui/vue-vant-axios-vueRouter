import Vue from 'vue'
import Router from 'vue-router'


let layout = resolve => require(['@/views/layout/layout.vue'], resolve); //布局
let routerView = resolve => require(['@/components/common/routerView.vue'], resolve); //主页
let loginOut = resolve => require(['@/views/common/loginOut.vue'], resolve); //登出页面

let index = resolve => require(['@/views/index/index.vue'], resolve); //主页
let indexOrder = resolve => require(['@/views/index/order.vue'], resolve); //检测记录订单

Vue.use(Router)

var router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: layout,
        redirect: "/index",
        children: [{
            path: '/index',
            component: routerView,
            children: [
                {
                    path: "/",
                    component: index
                },
                {
                    path: "order",
                    component: indexOrder
                }
            ]
        }]
    }, {
        path: '/loginOut',
        name: 'loginOut',
        component: loginOut
    }]
})



export default router
