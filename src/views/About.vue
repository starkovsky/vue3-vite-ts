<template>
  <div class="about">About1</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style>
.about {
  @apply text-center text-7xl;
  @apply leading-snug;
  @apply text-pink-700;
}
</style>
