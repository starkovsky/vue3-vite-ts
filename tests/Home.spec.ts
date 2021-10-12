import { shallowMount } from '@vue/test-utils';

import Home from '@/views/Home.vue';

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.html()).toContain('Test');
  });
});
