<template>
  <div class="TheFooterBlock">Блок футера 2</div>
  <TheFooterDiv></TheFooterDiv>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheFooterDiv from './TheFooterDiv.vue';

export default defineComponent({
  name: 'TheFooterBlock',
  components: {
    TheFooterDiv,
  },
});
</script>

<style>
.TheFooterBlock {
  @apply bg-purple-700;
  @apply text-5xl text-purple-900;
}
</style>
