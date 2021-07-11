export default {
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