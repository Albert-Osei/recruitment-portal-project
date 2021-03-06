import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
import Home from '../views/Home.vue'
import SingleDashboard from '../views/SingleDashboard.vue'
import TakeAssessmentPage from '../views/TakeAssessmentPage.vue'
import Questions from '../views/Questions.vue'
import CreateApplication from '../views/CreateApplication.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import EntriesTable from '../views/EntriesTable.vue'
import History from '../views/History.vue'
import Successful from '../views/Successful.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/AdminLogin.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Signup.vue'),
    meta: { guest: true },
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/forms',
    name: 'Forms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Forms.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admindashboard',
    name: 'admindashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/AdminDashboard.vue')
  },
  {
    path: '/assessment',
    name: 'Assessment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Assessment.vue')
  },
  {
    path: '/singledashboard',
    name: 'SingleDashboard',
    component: SingleDashboard
  },
  {
    path: '/takeassessmentpage',
    name: 'TakeAssessmentPage',
    component: TakeAssessmentPage
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/create-application',
    name: 'CreateApplication',
    component: CreateApplication
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/entriestable',
    name: 'EntriesTable',
    component: EntriesTable
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/successful',
    name: 'Successful',
    component: Successful
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Handling Unauthorized Users
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next ()
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next("/login");
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default router
