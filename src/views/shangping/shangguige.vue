<!--  -->
<template>
<div class='box'>
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品规格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
//方法集合
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.head {
  width: 100%;
  height: 55.4px;
  line-height: 55.4px;
  .el-breadcrumb {
    width: 100%;
    height: 55.4px;
    line-height: 55.4px;
    padding-left: 20px;
    border-bottom: 1px solid #808080;
  }
}
</style>