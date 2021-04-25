<template>
    <li>
        <h3>{{ topicName }}</h3>
        <p>{{ description }}</p>
        <button>Learn More</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'topicName', 'description']
}
</script>