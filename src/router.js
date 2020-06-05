import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import homepage from './pages/home/homepage'
const routes=[
    //这里配置路由
    {path: '/', component: homepage}
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