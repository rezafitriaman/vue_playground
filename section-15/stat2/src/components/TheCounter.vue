<template>
    <h3>{{finalCounter}}</h3>
    <p>the counter</p>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        /* finalCounter() {
            console.log('aa',this.$store.getters['numbers/finalCounter'])
            return this.$store.getters['numbers/finalCounter'];
 
        } */
        ...mapGetters('numbers', ['finalCounter'])
        /* log() {
            console.log('mapGetters', {...mapGetters(['finalCounter'])})
            console.log('mapGetters', mapGetters(['finalCounter']))
            return mapGetters(['finalCounter'])
        } */
    },
}
</script>