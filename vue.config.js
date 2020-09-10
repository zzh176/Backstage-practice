module.exports = {
    devServer:{
        port:8848,//设置端口号
        host:"localhost",//设置主机名
        https:false,//设置是否开启https协议：false  true
        open:true,//启动完成后是否自动打开浏览器
        // proxy:{  //配置解决跨域
        //     [process.env.VUE_APP_BASE_API]:{
        //         target:process.env.VUE_APP_SERVICE_URL,//代理的地址 = "http://localhost:8001"
        //         changeOrigin:true,//开启代理
        //         pathRewrite:{
        //             ["^"+process.env.VUE_APP_BASE_API]:""   //VUE_APP_BASE_API = "/api"
        //         }
        //     }

        // }
    },
    lintOnSave:false,  //关闭eslint
    productionSourceMap:false,//打包时不生成.map
}