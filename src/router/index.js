import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Menu from '@/views/Menu.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      title : 'Home'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta : {
      title : 'Menu'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta : {
      title : 'Contact'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta : {
      title : 'About'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to)=>{
  document.title = "ChopNow | " + to.meta.title
})

export default router
