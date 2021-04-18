<template>
  <div class="footer">Подвал</div>
  <TheFooterBlock></TheFooterBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheFooterBlock from './TheFooterBlock.vue';

export default defineComponent({
  name: 'TheFooter',
  components: {
    TheFooterBlock,
  },
});
</script>

<style>
.footer {
  @apply bg-green-700;
  @apply text-5xl text-green-900;
}
</style>
