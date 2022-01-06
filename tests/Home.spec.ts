import { createTestingPinia } from '@pinia/testing';
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils';

import Home from '@/views/HomePage.vue';

let wrapper: VueWrapper<any>;

function createComponent() {
  return shallowMount(Home, {
    global: {
      plugins: [createTestingPinia()],
    },
  });
}

jest.mock('@/runtimeEnv', () => {
  return {
    isDEV: false,
    isPROD: true,
    MODE: 'production',
    APP_TITLE: 'Test HomePage.vue',
    API_URL: 'http://localhost:5000/api',
  };
});

enableAutoUnmount(afterEach);

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    wrapper = createComponent();
    wrapper; //?
    expect(wrapper.findAll('button').length).toBe(2);
  });
});
