import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';

const app = createApp(App);

app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});
