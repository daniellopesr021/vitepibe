import { createPinia } from 'pinia';
import { InstallPlugin } from '@/spaContext';

export const install: InstallPlugin = ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
};
