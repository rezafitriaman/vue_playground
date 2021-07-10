import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            
            state.counter = state.counter + 2 
        },
        increase(state, payload) {
            console.log('state1', payload)
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context,payload) {
            console.log('increment', context)
            setTimeout(() => {
                context.commit('increase', payload);
            },2000)
        },
        increase(context, payload) {
            console.log('increase', context)
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state, getters) {
            console.log(state)
            console.log(getters)
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            console.log('finalCounter', finalCounter)

            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter
        },
    }
}

const store = createStore({
    modules: {
      numbers: counterModule  
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }   
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    actions: {
        login(context) { 
            context.commit('setAuth', { isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false});
        }
    }
});

createApp(App)
.use(store)
.mount('#app')
