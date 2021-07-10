<template>
    <button @click="increment({value: 1})">Add 1</button>
    <button @click="increase({value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        /* addOne() {
           this.$store.dispatch('increase', {value: 2});
        } */
        ...mapActions('numbers', ['increment', 'increase'])
    },
}
</script>