import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//前端页面
import home from './layout/home/home'
import homepage from './pages/homepage/homepage';
import login from './pages/login/login'
import admin from './layout/admin/admin'
import profile from './pages/profile/profile'
import contactus from './pages/contactus/contactInfo'
import business from './pages/business/business'
import details from './components/dynamic/details'
import dynamic from './pages/dynamic/dynamic'
import query from './pages/query/query'
import dckc from './pages/query/dckc'
import zxfjf from './pages/query/zxfjf'
import dcjf from './pages/query/dcjf'
import jhjzx from './pages/query/jhjzx'
import clientlogin from './pages/query/login'
//后台管理页面
import adminhome from './pages/admin/adminhome'
import dmanage from "./pages/admin/dynamic/d_manage";
import drelease from './pages/admin/dynamic/d_release'
import bmanage from './pages/admin/business/b_manage'
import brelease from './pages/admin/business/b_release'

const routes = [
    //这里配置路由
    {
        path: '/', component: home, redirect: '/homepage',
        children: [
            { path: "homepage", component: homepage, meta: { keepAlive: true } },
            { path: "profile", component: profile },
            { path: "contactus", component: contactus, },
            { path: "business", component: business, meta: { keepAlive: true } },
            { path: "details", component: details },
            { path: 'dynamic', component: dynamic, meta: { keepAlive: true } },
            {
                path: 'query', component: query, redirect: '/query/dckc', meta: { keepAlive: true },
                children: [
                    { path: 'dckc', component: dckc },
                    { path: 'zxfjf', component: zxfjf },
                    { path: 'dcjf', component: dcjf },
                    { path: 'jhjzx', component: jhjzx },
                ]
            },
            {path:'clientlogin',component:clientlogin}
        ]
    },
    { path: '/login', component: login },
    {
        path: '/admin', component: admin,
        children: [
            { path: 'adminhome', component: adminhome },
            { path: 'dmanage', component: dmanage, meta: { keepAlive: true } },
            { path: 'drelease', component: drelease },
            { path: 'bmanage', component: bmanage, meta: { keepAlive: true } },
            { path: 'brelease', component: brelease },
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