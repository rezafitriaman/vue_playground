<template>
  <ul>
    <learning-resources
      v-for="storedReource in resources"
      :id="storedReource.id"
      :key="storedReource.id"
      :title="storedReource.title"
      :description="storedReource.description"
      :link="storedReource.link"
      >{{ storedReource.id }}</learning-resources
    >
  </ul>
</template>

<script>
import LearningResources from "./LearningResources";

export default {
    components: {
        LearningResources
    },
    inject: ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
