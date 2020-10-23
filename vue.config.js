module.exports = {
    devServer:{
        port:8848,//设置端口号
        host:"localhost",//设置主机名
        https:false,//设置是否开启https协议：false  true
        open:true,//启动完成后是否自动打开浏览器
        proxy : {
            [process.env.VUE_APP_API_NAME] : {
                target : process.env.VUE_APP_API_SERVICE,
                changeOrigin : true,
                pathRewrite : {
                    ["^" + process.env.VUE_APP_API_NAME] : "" 
                }
            }
        }

    },
    lintOnSave:false,  //关闭eslint
    productionSourceMap:false,//打包时不生成.map
}