<template>
    <ul>
        <knowledge-element
            v-for="topic in topics"
            :key="topic.id"
            :id="topic.id"
            :topic-name="topic.title"
            :description="topic.description"
        ></knowledge-element>
    </ul>
</template>

<script>
import KnowledgeElement from './KnowledgeElement.vue'

export default {
    components: {
        KnowledgeElement
    },
    inject:['topics'],
    //emits: ['select-topic'],
/*     methods: {
        test(value) {
            console.log(value);
            return value;
        }
    } */
}
</script>