<template>
  <div class="home">{{ test }}</div>
  <HelloWorld></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const test = ref('Test');
    return { test };
  },
});
</script>
