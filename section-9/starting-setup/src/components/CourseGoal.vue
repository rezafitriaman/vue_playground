<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal"></slot>
        </li>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            goals: ['Create vue', 'Create app with vue', 'Make things easyer for other people']
        }
    }
}
</script>