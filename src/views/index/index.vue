<template>
<div class="view-main">
    我是首页啦
    <van-skeleton title :row="3" />
    <van-skeleton title avatar :row="3" />

    <router-link to="/index/order">去订单页面</router-link>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Skeleton
} from 'vant';
Vue.use(Skeleton);

export default {
    name: 'app',
    components: {},
    data() {
        return {}
    },
    created() {},
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "~@styles/common/remfun";

.view-main {
    font-size: 50px;
    font-size: rem(50);
}
</style>
