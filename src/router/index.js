import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import TasksPage from '../views/TasksPage.vue'

const routes = [
  { 
    path: '/main', 
    name: 'main', 
    component: MainPage, 
    alias: '/' 
  },
  { 
    path: '/tasks', 
    name: 'tasks', 
    component: TasksPage, 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
