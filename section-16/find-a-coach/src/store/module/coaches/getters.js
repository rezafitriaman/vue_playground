export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0
    },
    isCoach(state, getters, rootState, rootGetters) {
        console.log('getterssss');
        console.log('state', state);
        console.log('getters', getters.coaches);
        console.log('rootState', rootState);
        console.log('rootGetters', rootGetters);

        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    }
};