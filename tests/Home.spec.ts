import { shallowMount } from '@vue/test-utils';

import Home from '@/views/HomePage.vue';

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.html()).toContain('Test');
  });
});
