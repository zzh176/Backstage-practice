<!--  -->
<template>
  <div class="home">
    <Header />
    <Nav />
    <!-- <Main /> -->
    <!-- ======================================== -->
    <!-- ======================================== -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Header from "./header/index"
import Nav from "./nav/nav"
// import Main from "./main/main"
export default {
  components: {
    Header,
    Nav,
    // Main
  },
  data() {
    return {};
  },
  computed: {
    
  },
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


</style>