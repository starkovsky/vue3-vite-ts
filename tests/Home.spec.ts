import { createTestingPinia } from '@pinia/testing';
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils';

const isDEV = false;
const isPROD = true;
const MODE = 'production';
const APP_TITLE = 'Test HomePage.vue';
const API_URL = 'http://localhost:5000/api';

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
    isDEV,
    isPROD,
    MODE,
    APP_TITLE,
    API_URL,
  };
});

enableAutoUnmount(afterEach);

describe('TheComponent.vue', () => {
  it('renders Test text', () => {
    wrapper = createComponent();
    expect(wrapper.findAll('button').length).toBe(2);
  });

  it('Test mocked runtimeEnv', () => {
    wrapper = createComponent();

    expect(wrapper.find('#runtime-env-isDEV').text()).toBe(`${isDEV}`);
    expect(wrapper.find('#runtime-env-isPROD').text()).toBe(`${isPROD}`);
    expect(wrapper.find('#runtime-env-MODE').text()).toBe(MODE);
    expect(wrapper.find('#runtime-env-APP_TITLE').text()).toBe(APP_TITLE);
    expect(wrapper.find('#runtime-env-API_URL').text()).toBe(API_URL);
  });
});
