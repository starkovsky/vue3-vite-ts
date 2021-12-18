<script setup lang="ts">
import { ref } from 'vue';

const pageName = ref('About Page');
</script>

<template>
  <div class="about">{{ pageName }}</div>
</template>
