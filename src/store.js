import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginMessage: sessionStorage.getItem("loginMessage")===null?"客户登录":sessionStorage.getItem("loginMessage"),
    loginstate:sessionStorage.getItem("loginstate")===null?false:true
  },
  mutations: {
    changeMessage (state,val) {
      sessionStorage.setItem("loginMessage",val)
      state.loginMessage=val
    },
    changeState(state,val){
      sessionStorage.setItem("loginstate",val)
      state.loginstate=val
    }
  }
})
export default store