<template>
  <Active-user :username="user.name" :age="user.age"/>
  <User-data @set-data="setUserData"/>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
  name: 'App',
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      user: {
        name: 'Master Reza Ftriaman',
        age: 34
      }
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age 
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
