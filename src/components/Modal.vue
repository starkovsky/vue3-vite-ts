<template>
  <div class="modal">
    Modal
    <Button>Modal Button</Button>
    <slot></slot>
    <Button>Modal Button</Button>
    <Button>Modal Button</Button>
    <Button>Modal Button</Button>
    <Button>Modal Button</Button>
    <TheHeader></TheHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './TheHeader.vue';

export default defineComponent({
  name: 'Modal',
  components: {
    TheHeader,
  },
});
</script>

<style>
.modal {
  @apply bg-yellow-700;
}
</style>
