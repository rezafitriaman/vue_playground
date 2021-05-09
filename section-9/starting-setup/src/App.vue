<!--<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      v-for="item in items"
      :key="item.activeUser.message"
      :full-name="item.activeUser.name"
      :info-text="item.activeUser.description"
      :role="item.activeUser.role"
    ></user-info>
    <course-goal>
      <template v-slot:default="slotProps">
        <h4>{{ slotProps.item }}</h4>
      </template>
    </course-goal>
   </div>
</template> -->

<template>
  <div>
      <the-header></the-header>
      <button @click="setSelectedComponent('active-goals')">Active Goal</button>
      <button @click="setSelectedComponent('manage-goals')">Manage Goal</button>
      <!-- <active-goals v-if="selectedComponent == 'active-goals'"></active-goals>
      <manage-goals v-if="selectedComponent == 'manage-goals'"></manage-goals> -->
      <keep-alive>
        <component v-bind:is="selectedComponent"></component>
      </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
/* import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from "./components/CourseGoal.vue";
 */
export default {
  name: "App",
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
/*     BadgeList,
    UserInfo,
    CourseGoal, */
  },
  data() {
    return {
      selectedComponent: "active-goals",
      items: [
        {
          activeUser: {
            name: "Reza Fitriaman",
            description: "Site owner and admin",
            role: "admin",
          },
        },
        {
          activeUser: {
            name: "Master Fitriaman",
            description: "Site owner and author",
            role: "author",
          },
        },
        {
          activeUser: {
            name: "Master Reza",
            description: "Site owner and author",
            role: "author",
          },
        },
      ],
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      console.log(this.selectedComponent);
      console.log(cmp);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
