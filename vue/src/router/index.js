import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  proxyTable: {
    '/api':{
      target:"http://127.0.0.1:7001/",
      changeOrigin:true,
      pathRewrite:{
        '^/api':''
      }
    }
  },
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
