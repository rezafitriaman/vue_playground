<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="remove(user)">{{user}}</li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'reza', 'julie', 'soda']
        }
    },
    methods: {
        addUser() {
            console.log(this.$refs)
            const enterdUserName = this.$refs.userNameInput.value;
            this.users.unshift(enterdUserName);

            this.$refs.userNameInput.value = ''
        },
        remove(user) {
            this.users = this.users.filter(usr => usr !== user);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-50px);
} 

.user-list-enter-active {
    transition: all .3s ease-in-out;
}

.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
} 

.user-list-leave-active {
    transition: all .3s ease-in;
    position: absolute;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.user-list-move {
    transition: transform .3s ease-out;
}
</style>