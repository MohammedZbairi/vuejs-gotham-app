import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import UserLogin from './components/UserLogin.vue';
import DashboardLayout from './layouts/DashboardLayout.vue'
import ChartManager from './components/ChartManager.vue'
import UserAccount from './components/UserAccount.vue'
import DashboardManager from './components/DashboardManager.vue'
import ForumComponent from './components/ForumComponent.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: UserLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardLayout,
      children: [{
          path: '/',
          name: 'chart',
          component: DashboardManager,
        },
        {
          path: '/dashboard/chart',
          name: 'chart',
          component: ChartManager
        },
        {
          path: '/dashboard/users',
          name: 'Users',
          component: UserAccount
        },
        {
          path: '/dashboard/forum',
          name: 'Forum',
          component: ForumComponent
        }


      ]
    },
  ],
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')