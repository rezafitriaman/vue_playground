import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseBadge from "./components/ui/BaseBadge";

createApp(App).use(router).component('base-badge', BaseBadge).mount('#app')
