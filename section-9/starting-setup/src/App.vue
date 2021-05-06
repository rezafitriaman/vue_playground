<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
<!--     <user-info
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
    ></user-info>
    <user-info
    :full-name="activeUser2.name"
    :info-text="activeUser2.description"
    :role="activeUser2.role"
    ></user-info> -->
    <user-info v-for="item in items" :key="item.activeUser.message"
    :full-name="item.activeUser.name"
    :info-text="item.activeUser.description"
    :role="item.activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BadgeList,
    UserInfo
  },
  data() {
    return {
      items: [
        { 
          activeUser : {
            name: 'Reza Fitriaman',
            description: 'Site owner and admin',
            role: 'admin'
          }
        },
        { 
          activeUser : {
            name: 'Master Fitriaman',
            description: 'Site owner and author',
            role: 'author'
          }
        },
        { 
          activeUser : {
            name: 'Master Reza',
            description: 'Site owner and author',
            role: 'author'
          }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
