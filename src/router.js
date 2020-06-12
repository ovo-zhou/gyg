import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from './layout/home/home'
import homepage from './pages/home/homepage';
import login from './pages/login/login'
import admin from './components/common/admin'
import profile from './pages/profile/profile'
const routes = [
    //这里配置路由
    {
        path: '/', component: home,redirect:'/homepage',
        children: [
            { path: "homepage", component: homepage },
            { path: "profile", component: profile },
        ]
    },
    { path: '/login', component: login },
    { path: '/admin', component: admin },

]
const router = new VueRouter({
    routes
})
//路由守卫，做页面权限控制，后台管理页面会用到，暂时注释
/*
router.beforeEach((to,from,next)=>{
})
*/
export default router