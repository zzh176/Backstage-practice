<!--  -->
<template>
  <div class="box">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="he_nav">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left:10px">
        <el-tab-pane style="margin-left:10px" label="全部" name="first">
          <div class="butt_header">
            <el-button type="success" :size="mini">发布商品</el-button>
            <el-button type="danger" :size="mini">批量删除</el-button>
            <el-button size="mini">上架</el-button>
            <el-button size="mini">下架</el-button>
            <div class="butt_right">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                  <el-input size="mini" v-model="formInline.user" placeholder="要搜索的商品名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" style="background:#808080;border:none">搜索</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    size="mini"
                    style="background:white;color:black;border:1px solid #808080"
                  >高级搜索</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="bottom_tab">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%;height: 456px;"
              border
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="商品" width="200">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="age" label="实际销售" width="100"></el-table-column>
              <el-table-column prop="address" label="商品状态" width="80" show-overflow-tooltip></el-table-column>
              <el-table-column prop="yes" label="审核状态" width="100" show-overflow-tooltip></el-table-column>
              <el-table-column prop="ages" label="总库存" width="90" show-overflow-tooltip></el-table-column>
              <el-table-column prop label="价格(元)" width="140" show-overflow-tooltip>
                <span class="tab_s1">￥333.00</span>
                <span class="tab_s2">/￥399.00</span>
              </el-table-column>
              <el-table-column
                prop
                style="text-align: center;"
                width="450"
                label="操作"
                show-overflow-tooltip
              >
                <div>
                  <el-link class="link_l" :underline="false" type="primary">主要链接</el-link>
                  <el-link class="link_l" :underline="false" type="danger">危险链接</el-link>
                  <el-link class="link_l" :underline="false" type="danger">危险链接</el-link>
                  <el-link class="link_l" :underline="false" type="danger">危险链接</el-link>
                  <el-link class="link_l" :underline="false" type="danger">危险链接</el-link>
                  <el-link class="link_l" :underline="false" type="primary">主要链接</el-link>
                  <el-link class="link_l" :underline="false" type="primary">主要链接</el-link>
                </div>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="审核中" name="second">2</el-tab-pane>
        <el-tab-pane label="出售中" name="third">3</el-tab-pane>
        <el-tab-pane label="已下架" name="fourth">4</el-tab-pane>
        <el-tab-pane label="库存预警" name="ku">4</el-tab-pane>
        <el-tab-pane label="回收站" name="hui">4</el-tab-pane>
      </el-tabs>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-03",
          age: "0",
          ages: "234",
          yes: "通过",
          address: "正常",
        },
        {
          date: "2016-07-03",
          age: "0",
          yes: "通过",
          ages: "335",
          address: "审核中",
        },
        {
          date: "2019-07-03",
          age: "0",
          ages: "226",
          yes: "通过",
          address: "正常",
        },
        {
          date: "2012-11-01",
          age: "0",
          ages: "102",
          yes: "通过",
          address: "审核中",
        },
        {
          date: "2018-09-30",
          age: "0",
          ages: "24",
          yes: "通过",
          address: "审核中",
        },
        {
          date: "2016-01-01",
          age: "0",
          ages: "200",
          yes: "通过",
          address: "正常",
        },
        {
          date: "2016-01-01",
          age: "0",
          ages: "200",
          yes: "通过",
          address: "正常",
        },
      ],
      multipleSelection: [],
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // ======== 结束 ================
  },
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
.box {
  width: 100%;
  height: 100%;

  display: block;
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

  .he_nav {
    width: 100%;
  }

  .butt_header {
    width: 101%;
    height: 41px;
    margin-left: -10px;
    display: flex;
    .butt_right {
      width: 32%;
      height: 100%;
      margin-left: 40%;
    }
  }
  .bottom_tab {
    width: 100%;
    height: 436px;
  }
  .link_l {
    font-size: 12px;
    padding: 4px 7px;
    text-decoration: none;
  }
  .tab_s1 {
    color: red;
    font-size: 12px;
  }
  .tab_s2 {
    color: #808080;
    font-size: 12px;
  }
  .block {
    width: 100%;
    height: 80px;
    border: 1px solid #000;
    font-size: 50px;
  }
}
</style>