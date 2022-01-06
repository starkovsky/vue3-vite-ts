<script setup lang="ts">
import { isDEV } from '@/runtimeEnv';
</script>

<template>
  <div>Hello World {{ isDEV }}</div>
</template>
