import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import index from '../pages/index.vue'
import button from '../pages/pageButton.vue'
import list from '../pages/pageList.vue'
import nav from '../pages/pageNav.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/button',
      name: 'Button',
      component: button
    },
    {
      path: '/list',
      name: 'List',
      component: list
    },
    {
      path: '/nav',
      name: 'Nav',
      component: nav
    }
  ]
})
