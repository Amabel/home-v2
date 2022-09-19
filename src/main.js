import { createApp } from 'vue';
import './style.css';
import 'animate.css';
import App from './App.vue';
import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';
import vClickOutside from 'click-outside-vue3';
import 'vue3-cute-component/dist/style.css';

const app = createApp(App);
app.use(VueFullPage);
app.use(vClickOutside);
app.mount('#app');
