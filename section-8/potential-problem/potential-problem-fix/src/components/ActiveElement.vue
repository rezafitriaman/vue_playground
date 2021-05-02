<template>
    <section>
        <h2>{{ topicTitle }}</h2>
        <p>{{ text }}</p>
        <p v-if="text === null">Please choese a topic</p>
    </section>
</template>

<script>
export default {
    props: ['topicTitle', 'text'],
}
</script>