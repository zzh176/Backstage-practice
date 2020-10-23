import axios from 'axios';
import { Loading } from 'element-ui';
import router from "../router/index"

import {getToken} from "./auth.js"
const request = axios.create({
    //设置公共路径
    // baseURL:'http://ceshi5.dishait.cn',
    baseURL:process.env.VUE_APP_API_NAME,
    timeout:5000  //设置请求时间是否超时 
});

//封装loading加载
const loading = {
  loadingInstance : null,
  open(){
    if(this.loadingInstance === null){
      this.loadingInstance = Loading.service({
        target : ".main",
        text : "玩命加载中，急个锤子！",
        background : "rgba(23,244,62,0.5)",
        spinner: "el-icon-loading",
        width:"100px"
      });
    }
  },
  close(){
    if(this.loadingInstance !== null){
      this.loadingInstance.close();
    }
    this.loadingInstance = null;
  }
} 

//请求拦截器
request.interceptors.request.use(function (config){
    console.log("请求拦截")

    // loading.open();
    const token = getToken() ? getToken() : ""
    config.headers.token = token;
    // const token = localStorage.getItem("ht_token")?localStorage.getItem("ht_token"):"";
    // config.headers.Authorization =token;
    return config;
},function (error){
    // loading.close();
    return Promise.reject(error);
});

//相应拦截器
request.interceptors.response.use(function (response) {
    console.log("相应拦截器")
    //关闭loading加载
    loading.close();

    if(response.code == "202"){
      localStorage.removeItem("ht_token");
      localStorage.removeItem("ht_info");
      router.push({path:"/login"})
    console.log(response)

    }
    return response;
},function (error){
    //关闭loading加载
    loading.close();
    return Promise.reject(error);
});


export default request;