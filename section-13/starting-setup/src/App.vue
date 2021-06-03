<template>
  <main>

  </main>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Eginers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        {id: 'u1', fullName: 'Max Schwarz', role: 'Enginer'},
        {id: 'u2', fullName: 'Praveen Kumar', role: 'Enginer'},
        {id: 'u3', fullName: 'Julie Jones', role: 'Enginer'},
        {id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant'},
        {id: 'u5', fullName: 'Marie Smith', role: 'Consultant'}
      ],
    }
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    }
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    }
  }
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
