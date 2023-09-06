import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from '@/routes';
import pinia from '@/stores';

const app = createApp(App).use(router).use(pinia);

// Wait until the router is ready before mounting the app
router.isReady().then(() => {
  app.mount('#app');
});
