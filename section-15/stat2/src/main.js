import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2 
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
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
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increase');
            },2000)
        },
        increase(context, payload) {
            context.commit('increase', payload);
        }
    }
});

createApp(App)
.use(store)
.mount('#app')
