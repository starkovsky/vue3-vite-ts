<template>
  <div class="TheFooterDiv">Блок футера 3</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooterDiv',
});
</script>

<style>
.TheFooterDiv {
  @apply bg-pink-700;
  @apply text-5xl text-green-900;
}
</style>
