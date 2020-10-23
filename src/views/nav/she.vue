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
          <el-menu-item index="/sjcsz">
            <i class="el-icon-setting"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/swlsz">
            <i class="el-icon-setting"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/sadmin">
            <i class="el-icon-setting"></i>
            <span slot="title">管理员设置</span>
          </el-menu-item>
          <el-menu-item index="/sjysz">
            <i class="el-icon-setting"></i>
            <span slot="title">交易设置</span>
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
  display: flex;
  .nav {
    width: 19%;
    border-right: 1px solid #808080;
    position: absolute;
    // background: red;
    top: 8.7%;
    bottom: 0;
    left: 0;
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