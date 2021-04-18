<template>
  <h1>{{ msg }}</h1>
  <h1>{{ computedMsg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>
  <Button></Button>
  <Modal>
    <Button>test</Button>
    <Button>
      <Modal>
        <Button>test</Button>
        <Button>
          <Modal>
            <Button>test</Button>
            <Button>test2</Button>
          </Modal>
        </Button>
      </Modal>
    </Button>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from 'vue';
import { useVuex } from '../store';

import Button from './Button.vue';
import Modal from './Modal.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: { Button, Modal },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useVuex();
    const count = computed(() => store.state.count);
    const increment = () => store.commit('increment');

    const computedMsg = toRef(props, 'msg');

    return { count, increment, computedMsg };
  },
});
</script>
