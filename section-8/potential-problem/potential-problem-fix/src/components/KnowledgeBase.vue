<template>
    <section>
        <h2>Select a topic</h2>
        <knowledge-grid></knowledge-grid>
    </section>
</template>

<script>
import KnowledgeGrid from './KnowledgeGrid.vue'
export default {
    components: {
        KnowledgeGrid
    },
    //props: ['topics'],
    //emits: ['select-topic'],
    methods: {},
/*     created() {
        console.log('At this point, this.property is now reactive and propertyComputed will update.')
        console.log(this.topics);
    } */
}
</script>