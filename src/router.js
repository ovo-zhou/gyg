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
import vehicle from './pages/vehicleReservation/index'
import ZHCLYY from "./pages/vehicleReservation/ZHCLYYQuery";
import XHCLYY from './pages/vehicleReservation/XHCLYYQuery'
import LSJGCL from './pages/vehicleReservation/LSJGCLQuery'
import appointmentEdit from './pages/vehicleReservation/AppointmentEdit'
import InboundVehicleList from './pages/vehicleReservation/InboundVehicleList'
//后台管理页面
import adminhome from './pages/admin/adminhome'
import dmanage from "./pages/admin/dynamic/d_manage";
import drelease from './pages/admin/dynamic/d_release'
import bmanage from './pages/admin/business/b_manage'
import brelease from './pages/admin/business/b_release'
import nrelease from './pages/admin/notice/n_release'
import nmanage from './pages/admin/notice/n_manage'

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
                    { path: 'dckc', component: dckc, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'zxfjf', component: zxfjf, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'dcjf', component: dcjf, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'jhjzx', component: jhjzx, meta: { keepAlive: true, clientlogin: true } },
                ]
            },
            {
                path: 'vehicle', component: vehicle, redirect: '/vehicle/ZHCLYY', meta: { keepAlive: true },
                children: [
                    { path: 'ZHCLYY', component: ZHCLYY, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'XHCLYY', component: XHCLYY, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'LSJGCL', component: LSJGCL, meta: { keepAlive: true, clientlogin: true } },
                    { path: 'appointmentEdit', component: appointmentEdit, meta: { clientlogin: true } },
                    { path: 'InboundVehicleList', component: InboundVehicleList, meta: { clientlogin: true } },
                ]
            },
            { path: 'clientlogin', component: clientlogin }
        ]
    },
    { path: '/login', component: login },
    {
        path: '/admin', component: admin, redirect: '/admin/adminhome',
        children: [
            { path: 'adminhome', component: adminhome, meta: { adminlogin: true } },
            { path: 'dmanage', component: dmanage, meta: { keepAlive: true } },
            { path: 'drelease', component: drelease, meta: { adminlogin: true } },
            { path: 'bmanage', component: bmanage, meta: { keepAlive: true } },
            { path: 'brelease', component: brelease, meta: { adminlogin: true } },
            { path: 'nrelease', component: nrelease, meta: { adminlogin: true } },
            { path: 'nmanage', component: nmanage, meta: { keepAlive: true } },
        ]
    },

]
const router = new VueRouter({
    routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.clientlogin){
        let clientUser= JSON.parse(sessionStorage.getItem("clientUser"))
        if(clientUser===""||clientUser===null){
            // next('/clientlogin')
            next({path:'/clientlogin',query:{tourl:to.path}})
        }else{
            next()
        }
    }
    else if(to.meta.adminlogin){
        if (
            JSON.parse(sessionStorage.getItem("user")).UserIdentity.indexOf(
              "系统管理员"
            ) >= 0
          ){
              next()
          }else{
              next("/login")
          }
    }else{
        next()
    }
    
})

export default router