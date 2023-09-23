import {defineStore} from 'pinia'

export const useExampleStore = defineStore('Example', {
  state: () => ({
    users: [],
    loading: false,
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getUsers() {
      this.loading = true
      const res = await fetch('https://randomuser.me/api?results=10')
      const data = await res.json()

      this.users = data.results
      this.loading = false
    },
    increment() {
      this.count ++
    },
    down() {
      this.count --
    }
  }
})