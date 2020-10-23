import request from "../utils/request"

export default {
    login(username,password){
        return request({
            url:"/admin/login",
            method:"post",
            data:{
                username,
                password
            }
        })
    },
    remlogin(token){
        return request({
            url:"http://ceshi5.dishait.cn/admin/logout",
            method:"post",
            data:{
                token,
            }
        })
    },


}