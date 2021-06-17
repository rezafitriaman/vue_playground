<template>
    <button @click="confirmInput">Confirm</button>
    <button @click="saved">save</button>
    <ul>
        <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"></user-item>
    </ul>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
    components: {
        UserItem
    },
    data() {
        return {
            changeSaved: false
        }
    },
    inject: ['users'],
    mounted: function() {
        console.log(this.users)
    },
    methods: {
        confirmInput() {
            this.$router.push('/teams');
        },
        saved() {
            console.log('change save')
            this.changeSaved = true
        }

    },
    beforeRouteEnter(to, from, next) {
        console.log('userlist')
        console.log(to, from, next)
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave', to, from)
        if(this.changeSaved) {
            next()
        }else {
            const userWantToLeave = confirm('wanna Go? u got unsaved changes');
            next(userWantToLeave)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
}
</style>