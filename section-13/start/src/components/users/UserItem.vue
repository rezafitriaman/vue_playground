<template>
    <li>
        <h3>{{ name }}</h3>
        <div class="role" :class="roleClass">{{ role }}</div>
    </li>
</template>

<script>
export default {
    props: ['name', 'role'],
    computed: {
        roleClass() {
            if (this.role === 'Enginer') {
                return 'role--enginer'
            }
            if (this.role === 'Consultant') {
                return 'role--consultant'
            }
            return null;
        },
    },
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #9b59b6;
    padding: 1rem;  
}

h3 {
    margin: 0.5 0;
}

.role {
    border-radius: 40px;
    background-color: #9b59b6;
    color: #2c3e50;
    padding: 0.25rem 1rem;
    display: inline-block;
}

.role--enginer {
    background-color: #2980b9;
    color: white;
}

.role--consultant {
    background-color: #c0392b;
    color: white;
}
</style>