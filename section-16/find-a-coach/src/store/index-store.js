import { createStore} from "vuex";
import coachesModule from './module/coaches/index-coaches';
import requestsModule from './module/requests/index-request';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'c3w'
        }
    },
    getters: {
        userId(state) {
            console.log('rootGetters --- ', state)
            return state.userId;
        }
    }
})

export default store;