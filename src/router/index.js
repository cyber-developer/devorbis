import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: function () {
      return import(/* webpackChunkName: "services" */ '../views/Services.vue')
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    }
  },
  {
    path: '/project-detail/:id',
    name: 'Project Detail',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/ProjectDetail.vue')
    }
  },
  {
    path: '/careers',
    name: 'careers',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/Careers.vue')
    }
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
