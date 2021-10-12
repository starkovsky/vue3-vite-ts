/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_API_URL: string;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
