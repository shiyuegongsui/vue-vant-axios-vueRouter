<template>
<div id="app">
    <div class="bg"></div>
    <img src="~@/assets/images/header-logo.png">
    <router-view></router-view>
    <dz-footer></dz-footer>
</div>
</template>

<script>
/*
js规范
    命名:方法,变量  首字母小写驼峰式命名 
    书写顺序：如export default中的顺序
    props 中声明用 greetingText,   greeting-text="hi"
*/

//组件库引用

//自定义方法的引用
import {
    validate
} from "@/plugins/validate.js";

//组件引用
import dzFooter from '@/components/common/dzFooter';

//书写顺序
export default {
    name: 'layOut',
    mixins: [],
    components: {
        dzFooter
    },
    props: {},
    data() {
        return {
            loading: false,
            finished: false,
            totalCount: 0,
            list: [],
            query: {
                pageIndex: 1,
                pageSize: 10
            },
        }
    },
    computed: {},
    watch: {},
    created() {
        console.log(validate);
    },
    mounted() {},
    destroyed() {},
    methods: {
        getDetail() {
            this.$ajax.get("/index/countWare", {
                params: {}
            }).then(res => {});
        },
        getList() {
            var that = this;
            that.loading = true;
            that.finished = false;
            this.$ajax.post("/record/listDetectionRecord", {
                pageIndex: that.query.pageIndex,
                pageSize: that.query.pageSize
            }).then(res => {
                that.finished = true;
                that.loading = false;
                that.list = res.result.list;
                that.totalCount = res.result.totalCount;
            });
        },
    }
}
</script>

<style lang="scss" scoped>
@import "~@styles/common/remfun";

/*
css规范
    命名：烤串形式  小写英文 ，具有语义化   例如： .nav-list  
    规则：
        1.css的嵌套层级 最好不超过4层 
        2.在页面中尽量避免使用style属性
        3.布局定位属性–>自身属性–>文本属性–>其他属性. 此条可根据自身习惯书写, 但尽量保证同类属性写在一起.
*/

.bg {
    width: 120px;
    height: 63px;
    background: url("~@/assets/images/header-logo.png") center no-repeat;
    background-size: cover;

}
</style>
