import { createStore} from "vuex";
import coachesModule from './module/coaches/index-coaches';

const store = createStore({
    modules: {
        coaches: coachesModule
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