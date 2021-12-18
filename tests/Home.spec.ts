import { shallowMount, VueWrapper } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

import Home from '@/views/HomePage.vue';

let wrapper: VueWrapper<any>;

function createComponent() {
  return shallowMount(Home);
}

beforeEach(() => {
  setActivePinia(createPinia());
});

afterEach(() => {
  wrapper.unmount();
});

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    wrapper = createComponent();

    expect(wrapper.findAll('button').length).toBe(2);
  });
});
