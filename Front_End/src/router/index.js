import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Delete_drift_point from '@/components/data_process/delete_drift_point'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/delete_drift_point',
      name: 'delete_drift_point',
      component: Delete_drift_point
    }
  ]
})
