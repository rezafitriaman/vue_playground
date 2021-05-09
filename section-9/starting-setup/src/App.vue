<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info v-for="item in items" :key="item.activeUser.message"
    :full-name="item.activeUser.name"
    :info-text="item.activeUser.description"
    :role="item.activeUser.role"
    ></user-info>
    <course-goal>
      <template v-slot:default="slotProps">
        <h4>{{slotProps.item}}</h4>
      </template>
    </course-goal>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import CourseGoal from './components/CourseGoal.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal
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
</style>
