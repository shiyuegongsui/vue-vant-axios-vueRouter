<template>
<van-popup v-model="show" class="coupon-pop" :close-on-click-overlay="false">
</van-popup>
</template>

<script>
import Vue from "vue";
import {
    Toast,
    Popup,
} from "vant";
Vue.use(Popup);

export default {
    data() {
        return {
            show: true,
        };
    },
    methods: {},

};
</script>

<style lang="scss" scoped>
</style>
