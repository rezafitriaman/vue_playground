<template>
  <the-header></the-header>
  <router-view/>
  <p v-if="!isLoggedIn">test</p>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      isLoggedIn: false,
      cart: { 
        item: [], 
        total: 0, 
        qty: 0 
      }
    }
  },
  methods: {
      login() {
        this.isLoggedIn = true;
        console.log('login');
        console.log(this.isLoggedIn);
        return this.isLoggedIn
      },
      logout() {
        console.log('logout');
        this.isLoggedIn = false;
        return this.isLoggedIn
      }
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      login: this.login,
      logout: this.logout
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
