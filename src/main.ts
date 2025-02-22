import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './stores';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);

router.isReady().then(() => {
    app.mount('#app');
});
