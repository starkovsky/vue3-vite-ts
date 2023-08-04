<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <router-link to="/" class="dm-link">Home</router-link> |
    <router-link to="/about" class="dm-link">About</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
@import url('normalize.css');

@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;

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
</style>
