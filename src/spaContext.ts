import { App } from 'vue';

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>;
}

export type InstallPlugin = (ctx: AppContext) => void;
