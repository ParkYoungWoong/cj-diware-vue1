import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0
  }),
  actions: {
    increase() {
      this.count += 1
    }
  }
})
