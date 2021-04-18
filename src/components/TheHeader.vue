<template>
  <div class="header">Шапка</div>
  <TheFooter></TheFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheFooter from './TheFooter.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    TheFooter,
  },
});
</script>

<style>
.header {
  @apply bg-white text-red-600;
  @apply text-5xl text-red-900;
}
</style>
