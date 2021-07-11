import counterMutation from './mutations'
import counterActions from './actions'
import counterGetters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterActions,
    getters: counterGetters
}
