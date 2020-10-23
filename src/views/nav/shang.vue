<!--  -->
<template>
  <div class="box">
    <div class="nav">
      <el-col :span="12" style="width:100%;height:100%;">
        <el-menu
          :router="true"
          default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/slist">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="sfenlei">
            <i class="el-icon-setting"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/sguige">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="/slx">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="/spl">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>

    <div class="main">
      <router-view />
    </div>
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
//@import url(); 引入公共css类
.box {
  width: 100%;
  // height: 100%;

  // position: relative;
  display: flex;
  .nav {
    width: 19%;

    // border: 1px solid #000;
    position: absolute;
    // background: red;
    top: 8.7%;
    bottom: 0;
    left: 0;
    border-right: 1px solid #808080;

  }
  .main {
    width: 81%;
    // border: 1px solid #000;
    // background: red;
    position: absolute;
    right: 0;
    top: 8.7%;
    bottom: 0;
  }
}
</style>