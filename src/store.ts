import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';

import { isPROD } from '@/runtimeEnv';

export interface IRootState {
  isPageDisabled: boolean;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  state: {
    isPageDisabled: false,
  },
  getters: {},
  mutations: {
    setPageDiabled(state) {
      state.isPageDisabled = true;
    },
    setPageEnabled(state) {
      state.isPageDisabled = false;
    },
  },
  plugins: isPROD ? [] : [createLogger()],
});

export function useVuex(): Store<IRootState> {
  return baseUseStore(key);
}
