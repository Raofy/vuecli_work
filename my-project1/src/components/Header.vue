<template>
   <h1 class="header">{{msg}}</h1>
</template>

<script>
export default {
    name:"Header", //组件的名称
    data() {
        return{
            "msg":"这是自定义的一个header组件"
        }
    },
    // props: {    // 给组件传入参数
    //     msg: String
    // }
}
</script>

<!--scoped表示当前的样式，只能作用于当前组件中的template视图-->
<style scoped>
.header {
    height: 100px;
    line-height: 100px;
    background-color: #eee;
    text-align: center;
    color: blue;
}
</style>