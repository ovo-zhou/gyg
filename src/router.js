import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//前端页面
import home from './layout/home/home'
import homepage from './pages/homepage/homepage';
import login from './pages/login/login'
import admin from './layout/admin/admin'
import profile from './pages/profile/profile'
import contactus from './pages/contactus/contactus'
import contactInfo from './pages/contactus/contactInfo'
import feedback from './pages/contactus/feedback'
import business from './pages/business/business'
import details from './components/dynamic/details'
import dynamic from './pages/dynamic/dynamic'
//后台管理页面
import dmanage from "./pages/admin/dynamic/d_manage";
import drelease from './components/tinymce/tinymce-editor'
const routes = [
    //这里配置路由
    {
        path: '/', component: home, redirect: '/homepage',
        children: [
            { path: "homepage", component: homepage },
            { path: "profile", component: profile },
            {
                path: "contactus", component: contactus, redirect: '/contactus/contactInfo',
                children: [
                    { path: 'contactInfo', component: contactInfo },
                    { path: 'feedback', component: feedback }
                ]
            },
            { path: "business", component: business },
            { path: "details", component: details },
            { path: 'dynamic', component: dynamic }
        ]
    },
    { path: '/login', component: login },
    {
        path: '/admin', component: admin,
        children: [
            { path: 'dmanage', component: dmanage },
            { path: 'drelease', component: drelease },

        ]
    },

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