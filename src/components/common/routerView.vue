<template>
<div>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>

<style scoped>
  
</style>
