import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  plugins: process.env.NODE_ENV === 'production' ? [] : [createLogger()],
});

export function useVuex(): Store<State> {
  return baseUseStore(key);
}
