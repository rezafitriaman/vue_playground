<template>
    <section>
        <div>
            <h3>{{ fullName }}</h3>
            <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </div>
        <p>{{ infoText }}</p>
    </section>
</template>

<script>
import BaseBadge from './BaseBadge.vue'

export default {
    props: ['fullName', 'infoText', 'role'],
    components: {
        BaseBadge,
    }
}
</script>

<style scoped>

</style>