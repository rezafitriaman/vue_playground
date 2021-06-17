import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue'; 
import TeamMembers from './components/teams/TeamMembers.vue'; 
import NotFound from './components/NotFound.vue'; 
import TeamsFooter from './components/teams/TeamsFooter.vue'; 
import UsersFooter from './components/users/UsersFooter.vue'; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'  },
        {   name: 'teams',
            path: '/teams', 
            components: { default: TeamsList, footer: TeamsFooter}, 
            children: [
                { name: 'team-members', path: ':teamid', component: TeamMembers, props: true },
            ]
        },
        { path: '/users', 
            components: { 
                default: UsersList, 
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('before enter')
                console.log(to);
                console.log(from);
                next(); 
            } 
        },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }

        return { left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeeach');
    console.log('to', to);
    console.log('from', from);
    next();
});

router.afterEach(function(to, from) {
    // sending analitics data
    console.log('global after each');
    console.log('to', to);
    console.log('from', from);
})

const app = createApp(App)

app.use(router);
app.mount('#app');
