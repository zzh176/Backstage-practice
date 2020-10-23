
<template>
  <div class="header">
    <div class="ico">
      <a href="#">UNI-ADMIN</a>
    </div>
    <div class="elm">
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="mar" index="/shou">首页</el-menu-item>
        <el-menu-item class="mar" index="/shang">商品</el-menu-item>
        <el-menu-item class="mar" index="/ding">订单</el-menu-item>
        <el-menu-item class="mar" index="/hui">会员</el-menu-item>
        <el-menu-item class="mar" index="/she">设置</el-menu-item>
      </el-menu>
    </div>

    <div class="out">
      <el-avatar
        class="out_img"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="checkOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
    
  </div>
</template>

<script>
import loginApi from "../../api/login"
export default {
  components: {},
  data() {
    return {
      name:"",
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    handle(command) {
      console.log(command);
      switch (command) {
        case "changePass":
          this.changePass();
          break;
        case "checkOut":
          this.checkOut();
          break;
      }
    },
     changePass() {
      console.log("修改密码");
    },
    checkOut() {
      console.log("退出登录");

      localStorage.removeItem("ht_token");

      localStorage.removeItem("ht_info");

      this.$router.push("/login");
      this.$message({
        message: "成功退出",
        center: true,
      });
    },

  },
  created() {
    const info = JSON.parse(localStorage.getItem("ht_info"));
    this.name = info.name !== "undefined" ? info.name : "";
  
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.header {
  // width: 94.6%;
  // height: 50px;
  border: 1px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  padding: 0 40px;
  background: #545c64;
  .ico {
    float: left;
    a {
      text-decoration: none;
      color: white;
      line-height: 56px;
      font-size: 22px;
    }
  }
  .elm {
    margin-left: 54%;
    .mar {
      padding: 0 24px;
    }
  }
  .out {
    width: 10%;
    position: relative;
    .out_img {
      // margin-top: 10px;
      position: absolute;
      top: 10px;
    }
    .el-dropdown {
      position: absolute;
      top: 22px;
      right: 22px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>