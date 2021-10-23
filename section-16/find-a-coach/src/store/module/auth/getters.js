export default  {
    userId(state) {
        console.log('rootGetters --- ', state)
        return state.userId;
    }
}