<template>
  <the-header></the-header>
  <router-view></router-view>
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
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    }
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
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
