<template>
  <nav class="nav">
    <router-link to="/" class="dm-link">Home</router-link> |
    <router-link to="/about" class="dm-link">About</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
@import 'normalize.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  @apply p-0 m-0;
}

.dm-link {
  @apply text-green-600;
}

.nav {
  @apply text-center;
}

.nav a {
  @apply mx-2;
}

.home {
  @apply mx-auto w-52 h-52;
  @apply flex justify-center items-center;
}
</style>
