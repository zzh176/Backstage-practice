import request from "../utils/request"

export default {
    login(username,password){
        return request({
            url:"http://ceshi5.dishait.cn/admin/login",
            method:"post",
            data:{
                username,
                password
            }
        })
    },
}