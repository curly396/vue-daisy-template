import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('Global', {
  state: () => ({
        color: '#18453B'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count ++
    },
    down() {
      this.count --
    }
  }
})