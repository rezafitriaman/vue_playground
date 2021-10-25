export default  {
    userId(state) {
        console.log('rootGetters --- ', state)
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    }
}