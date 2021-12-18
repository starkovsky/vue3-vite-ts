import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
