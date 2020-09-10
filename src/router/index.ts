import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Header from "@/views/header/index.vue";
import Nav from "@/views/nav/index.vue";
// import Main from "@/views/main/main.vue";
import Login from "@/views/login/login.vue";
import Ding from "@/views/nav/ding.vue"
import Hui from "@/views/nav/hui.vue"
import Shou from "@/views/nav/index.vue"
import Shang from "@/views/nav/shang.vue"
import She from "@/views/nav/she.vue"

// ===============================================  头部  首页
import ShopList from "@/views/shouye/shoplist.vue"
import XiangCe from "@/views/shouye/xiangce.vue"
import HtShou from "@/views/shouye/IndexHt.vue"
// ===============================================  头部 商品
import Sfenlei from "@/views/shangping/fenlei.vue"
import Sguige from "@/views/shangping/shangguige.vue"
import Slx from "@/views/shangping/shanglx.vue"
import Spl from "@/views/shangping/shangpl.vue"
import Slist from "@/views/shangping/shoplist.vue"
// ===============================================  头部 订单
import Dguanli from "@/views/dingdan/dianguanli.vue"
import Dfapiao from "@/views/dingdan/faguanli.vue"
import Dsh from "@/views/dingdan/shouhou.vue"
// ===============================================  头部 会员
import Hlist from "@/views/hui/huilist.vue"
import Hdj from "@/views/hui/huidj.vue"
// ===============================================  头部 设置
import Sadmin from "@/views/shezhi/admingl.vue"
import Sjcsz from "@/views/shezhi/jcsz.vue"
import Sjysz from "@/views/shezhi/jysz.vue"
import Swlsz from "@/views/shezhi/wlsz.vue"
// ===============================================

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/home",
    children: [
      {
        path: "/",
        name: "home",
        meta: {
          title: "首页"
        },
        component: Home
      }
    ]
  },
  {
    path: "/hui",
    name: "hui",
    component: Home,
    children: [
      {
        path: "/",
        component: Hui,
        meta: {
          title: "会员"
        }
      }
    ]
  },
  {
    path: "/ding",
    name: "ding",
    component: Home,
    children: [
      {
        path: "/",
        component: Ding,
        meta: {
          title: "订单"
        }
      }
    ]
  },
  {
    path: "/shou",
    name: "shou",
    component: Home,
    children: [
      {
        path: "/",
        component: Shou,
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: "/shang",
    name: "shang",
    component: Home,
    children: [
      {
        path: "/",
        component: Shang,
        meta: {
          title: "商品"
        }
      }
    ]
  },
  {
    path: "/she",
    name: "she",
    component: Home,
    children: [
      {
        path: "/",
        component: She,
        meta: {
          title: "设置"
        }
      }
    ]
  },
  {
    path: "/shou",
    name: "shou",
    component: Home,
    children: [
      {
        path: "/",
        component: Shou,
        meta: {
          title: "后台首页"
        },
        children: [
          {
            path: "/shoplist",
            component: ShopList
          },
          {
            path: "/htshou",
            component: HtShou
          },
          {
            path: "/xiangce",
            component: XiangCe
          },

        ]
      }
    ]
  },
  // ===============================商品 >  分类
  {
    path: "/shang",
    name: "shang",
    component: Home,
    children: [
      {
        path: "/",
        component: Shang,
        meta: {
          title: "商品分类"
        },
        children: [
          {
            path: "/sfenlei",
            component: Sfenlei
          },
          {
            path: "/sguige",
            component: Sguige
          },
          {
            path: "/slx",
            component: Slx
          },
          {
            path: "/spl",
            component: Spl
          },
          {
            path: "/slist",
            component: Slist
          },
        ]
      }
    ]
  },
 
  // ===============================
  {
    path: "/shang",
    name: "shang",
    component: Home,
    children: [
      {
        path: "/",
        component: Ding,
        meta: {
          title: "订单"
        },
        children: [
          {
            path: "/dguanli",
            component: Dguanli
          },
          {
            path: "/dfapiao",
            component: Dfapiao
          },
          {
            path: "/dsh",
            component: Dsh
          },
        ]
      }
    ]
  },
  // ===============================
  {
    path: "/shang",
    name: "shang",
    component: Home,
    children: [
      {
        path: "/",
        component: Hui,
        meta: {
          title: "订单"
        },
        children: [
          {
            path: "/hlist",
            component: Hlist
          },
          {
            path: "/hdj",
            component: Hdj
          },
          
        ]
      }
    ]
  },
  // ===============================
  {
    path: "/shang",
    name: "shang",
    component: Home,
    children: [
      {
        path: "/",
        component: She,
        meta: {
          title: "设置"
        },
        children: [
          {
            path: "/sadmin",
            component: Sadmin
          },
          {
            path: "/sjcsz",
            component: Sjcsz
          },
          {
            path: "/sjysz",
            component: Sjysz
          },
          {
            path: "/swlsz",
            component: Swlsz
          },
          
        ]
      }
    ]
  },
  // ===============================
  // ===============================
  // ===============================
  // ===============================
  // ===============================
  // ===============================



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
