import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginMessage: "客户登录"
  },
  mutations: {
    changeMessage (state,val) {
      state.loginMessage=val
    }
  }
})
export default store