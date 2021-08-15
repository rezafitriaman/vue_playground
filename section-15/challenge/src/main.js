import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import BaseBadge from "./components/ui/BaseBadge";

createApp(App).use(router).use(store).component('base-badge', BaseBadge).mount('#app')
