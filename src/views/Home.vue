<template>
  <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>

<style>
img {
  @apply w-52 h-52;

  background-color: #000;
}
</style>
