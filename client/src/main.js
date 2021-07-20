import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.withCredentials = false
axios.defaults.baseURL = 'http://localhost:9090/api/v1';
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;
      store.dispatch('LogOut')
      return router.push('/login')
    }
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
