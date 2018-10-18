import Vue from 'vue'
import Vuex from 'vuex'
import Routervue from 'vue-router'
import store from '../store' 

//按需加载
const Index = () => import('@/views/index');
const Details = () => import('@/views/Details');
const Inquiry = () => import('@/views/inquiry');
const lazyLoad = () => import('@/views/lazyLoad');
const cartype = () => import('@/views/cartype');
const color = () => import('@/views/color');
const money = () => import('@/views/money');


Vue.use(Routervue)




let router =  new Routervue({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/Details',
      name: 'detail',
      component: Details
    },
    {
      path: '/Inquiry',
      name: 'inquiry',
      component: Inquiry
    },
    {
      path: '/color',
      name: 'color',
      component: color
    },
    {
      path: '/money',
      name: 'money',
      component: money
    },
    // {
    //   path: '/lazyLoad',
    //   name: 'lazyLoad',
    //   component: lazyLoad
    // },
    {
      path: '/cartype',
      name: 'cartype',
      component: cartype
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
//导航守卫
router.beforeEach((to,from,next)=>{
  store.commit('loadingImg',true)
  next()
})
router.afterEach(() =>{
  setTimeout(() =>{
    store.commit('loadingImg',false)
  },500)
})

export default router