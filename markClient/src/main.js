import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import 'bootstrap' // 載入 bootstrap 的 JS 檔
import 'bootstrap/dist/css/bootstrap.css' // 載入 bootstrap CSS 檔
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuex)
Vue.config.productionTip = false

const type2url = {
  'RETARGETING': '/common',
  'GRAIN': '/common',
  'SALIENCY': '/saliency',
  'ATTRIBUTE': '/attribute'
}

const store = new Vuex.Store({
  state: {
    username: localStorage.getItem('username'),
    notateType: 'RETARGETING',
    curUrl: '/common',
    imgUrl: 'http://localhost:8086/img?path=',
    rootPath: '/Users/loick/Documents/magus/'

  },
  mutations: {
    saveUsername (state, username) {
      state.username = username
      localStorage.setItem('username', username)
    },
    alterNotateType (state, notateType) {
      state.notateType = notateType
      let url = type2url[notateType]
      state.curUrl = url
      router.push(url)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
