import { createStore} from "vuex";
import coachesModule from './module/coaches/index-coaches';

const store = createStore({
    modules: {
        coaches: coachesModule
    }})

export default store;