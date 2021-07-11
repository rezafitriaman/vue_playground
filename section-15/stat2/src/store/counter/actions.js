export default {
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
}