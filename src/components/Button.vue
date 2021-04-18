<template>
  <div class="button">Button</div>

  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>

<style>
.button {
  background: #faf;
}
</style>
