import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import MainDashboard from './components/Dashboard/Main'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

// Setup routes
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: MainDashboard }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
 }).$mount('#app')

app;
