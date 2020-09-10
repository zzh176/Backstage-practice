import router from "./src/router/index";

import loginApi from "./src/api/login";



router.beforeEach((to,from,next) => {
    const token = localStorage.getItem("ht_token");


    if(!token){
        if(to.path !== "/login"){
            localStorage.removeItem("ht_info");
            next("/login");
        }else {
            next();
        }
    }else {
        if(to.path == "/login"){
            next();
        }else {
            const info = localStorage.getItem("ht_info");
            if(info){
                next();
            }else{
                loginApi.wxInfo().then(res => {
                    if(res.status == 200){
                        localStorage.setItem("ht_info",JSON.stringify(res.data.rows));
                        next();
                    }else {
                        localStorage.removeItem("ht_token");
                        next();
                    }
                })
            }
        }
    }
})