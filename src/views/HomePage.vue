<template>
  <div class="p-5 text-center">
    {{ counter }}
    <div>
      <button
        class="bg-cyan-600 text-cyan-100 px-3 py-1 m-2 rounded"
        @click="increment"
      >
        increment
      </button>
      <button
        class="bg-cyan-600 text-cyan-100 px-3 py-1 m-2 rounded"
        @click="decrement"
      >
        decrement
      </button>
    </div>
  </div>
  <hello-world class="text-emerald-500 text-center"></hello-world>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import HelloWorld from '../components/HelloWorld.vue';

import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
const { counter } = storeToRefs(store);

const increment = () => {
  store.increment();
};
const decrement = () => {
  store.decrement();
};
</script>
