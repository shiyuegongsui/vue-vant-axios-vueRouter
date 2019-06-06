const state = {
    count: 1001,
};


// mutations中涉及的是同步操作
// mutations需要使用store.commit进行分发
//调用方式  this.$store.commit("updateCount");
const mutations = {

    updateCount(state) {
        state.count += 1;
    },
};


// action中涉及的是异步操作
// action需要使用store.dispatch进行分发
//调用方式  this.$store.dispatch("asyncUpdate");
const actions = {
    asyncUpdate(state) {
        setTimeout(() => {
            state.commit("updateCount");
        }, 100);
    },
};


//类似vue组件中的 computed ，对state 进一步处理 供给给外部用
const getters = {
    countDesc(state) {
        return state.count + "哈哈哈"
    },
};

// 不要忘记把state, mutations等暴露出去。
export default {
    state,
    mutations,
    actions,
    getters
}