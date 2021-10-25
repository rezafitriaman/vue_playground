<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">Find a Coach</router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/coaches">All Coaches</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link to="/requests">Requests</router-link>
                </li>
              <li v-else>
                  <router-link to="/auth">Login</router-link>
              </li>
              <li v-if="isLoggedIn">
                <base-button @click="logout">Logout</base-button>
              </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      console.log('loggin', this.$store.getters.isAuthenticated)
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      // 'action' on the auth module
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    }
  }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 5rem;
        background-color: #3d008d;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header nav {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header h1 {
        margin: 0;
    }

    header h1 a {
        color: white;
        margin: 0;
    }

    header h1 a:hover,
    header h1 a:active,
    header h1 a.router-link-active {
        border-color: transparent;
    }

    header ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        margin: 0 0.5rem;
    }

    header a {
        text-decoration: none;
        color: #f391e3;
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border: 1px solid transparent;
    }

    a:active,
    a:hover,
    a.router-link-active {
        border: 1px solid #f391e3;
    }
</style>