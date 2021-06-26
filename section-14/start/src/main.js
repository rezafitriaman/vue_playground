import { createApp } from 'vue'
import App from './App.vue'
import BaseModal from './components/BaseModal.vue'
import {createRouter, createWebHistory} from 'vue-router'
import AllUsers from './pages/AllUsers.vue'
import CourseGoals from './pages/CourseGoals.vue'
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: AllUsers},
        {path: '/goals', component: CourseGoals}
    ]
})
const app = createApp(App);

app.component('base-bodal', BaseModal);
app.use(router);

router.isReady().then(function() {
    app.mount('#app')
});
