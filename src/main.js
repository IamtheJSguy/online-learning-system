import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import jQuery from 'jquery'

axios.defaults.baseURL = 'https://popm-backend.herokuapp.com/api'
// axios.defaults.baseURL = 'http://localhost:4000/api'
axios.defaults.headers.common.Authorization = localStorage.getItem('token')

import PortalVue from 'portal-vue'

Vue.use(PortalVue)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'

// global.jQuery = jQuery

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './custom.scss'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeMount: () => {
    store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
