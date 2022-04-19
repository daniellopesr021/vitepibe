import { createHead } from '@vueuse/head';
import { InstallPlugin } from '@/spaContext';

export const install: InstallPlugin = ({ app }) => {
  const head = createHead();
  app.use(head);
};
