import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useToDoStore = defineStore('store', {
  state: () => ({
    tasks: []
   }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    getTasksFromLocalStorage() {
      if (localStorage.getItem('tasks') === null) {
        this.tasks = []
      } else {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },

    setTaskIntoLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    addNewTask(title, body) {
      this.tasks.push({
        id: Date.now(),
        title: title,
        body: body,
        isDone: false
      })
      this.setTaskIntoLocalStorage()
    },

    editTask(id, title, body) {
      const taskId = this.tasks.findIndex(t => t.id === id)
      this.tasks[taskId].title = title
      this.tasks[taskId].body = body
      this.setTaskIntoLocalStorage()
    },

    changeStatus(id) {
      const taskId = this.tasks.findIndex(t => t.id === id)
      this.tasks[taskId].isDone = !this.tasks[taskId].isDone
      this.setTaskIntoLocalStorage()
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.setTaskIntoLocalStorage()
    },
  },
})