import { createStore} from "vuex";
import coachesModule from './module/coaches/index-coaches';
import requestsModule from './module/requests/index-request';
import authMOdule from './module/auth/index-auth';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authMOdule
    }
})

export default store;