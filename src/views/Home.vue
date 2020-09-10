<!--  -->
<template>
  <div class>
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="el-icon-user-solid">用户</el-menu-item>
        <el-menu-item index="1" class="nav-icon.teach">教学</el-menu-item>
        <el-menu-item index="1">题库</el-menu-item>
        <el-menu-item index="1">运营</el-menu-item>
        <el-menu-item index="1">营销</el-menu-item>
        <el-menu-item index="1">商品</el-menu-item>
        <el-menu-item index="1">财务</el-menu-item>
        <el-menu-item index="1">统计</el-menu-item>
        <el-menu-item index="1">系统</el-menu-item>
      </el-menu>
    </div>
    <div class="nav"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header {
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
</style>