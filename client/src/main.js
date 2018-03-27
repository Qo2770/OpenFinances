import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// THEMES
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here


// Components
import MainDashboard from './components/Dashboard/Main'

import AddProject from './components/Projects/AddProject'

import Login from './components/Users/Login'
import Signup from './components/Users/Signup'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)


// Setup routes
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: null },
    { path: '/projects/:project', name: 'projects', component: MainDashboard },
    { path: '/projects/:project/charts', name: 'charts', component: null },
    { path: '/projects/:project/settings', name: 'settings', component: null },
    { path: '/addproject', component: AddProject },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
 }).$mount('#app')

app;
