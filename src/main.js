import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './personalize';
import './assets/styles/reset.less';
import './assets/styles/global.less';

createApp(App).use(router).mount('#app');