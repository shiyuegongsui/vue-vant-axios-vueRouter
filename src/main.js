import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import './plugins/vant.js'
import './plugins/ajax.js'
import './filters/filter.js'
import './styles/common.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')