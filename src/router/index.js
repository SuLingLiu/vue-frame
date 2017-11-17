import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const shop = r => require.ensure([], () => r(require('@/pages/shop/shop')), 'shop');
const routercase = r => require.ensure([], () => r(require('@/pages/routercase/routercase')), 'routercase');
/* const case1 = r => require.ensure([], () => r(require('@/pages/routercase/children/case1')), 'case1');
const case2 = r => require.ensure([], () => r(require('@/pages/routercase/children/case2')), 'case2'); */
const case1 = () =>
  import ('@/pages/routercase/children/case1');
const case2 = () =>
  import ('@/pages/routercase/children/case2');

Vue.use(Router)

/* export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
}) */

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/routercase/:id',
      component: routercase,
      children: [{
          path: '',
          redirect: 'case1' //要注意，以 / 开头的嵌套路径会被当作根路径
        }, {
          path: 'case1',
          component: case1
        },
        {
          path: 'case2',
          component: case2
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
