<template>
    <button @click="addOne">Add 1</button>
</template>

<script>
export default {
    methods: {
        addOne() {
           this.$store.dispatch('increase', {value: 2});
        }
    },
}
</script>