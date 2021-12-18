import { shallowMount } from '@vue/test-utils';

import About from '@/views/AboutPage.vue';

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    const wrapper = shallowMount(About);

    expect(wrapper.html()).toContain('About Page');
  });
});
