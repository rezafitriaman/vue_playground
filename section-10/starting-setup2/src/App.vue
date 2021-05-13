<template>
  <the-header :title="headerTitle"></the-header>
  <stored-resources :resources="storedReources"></stored-resources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources";
import TheHeader from "./components/layouts/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
    StoredResources,
  },
  data() {
    return {
      headerTitle: 'Remember me',
      storedReources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official vue.js documention",
          link: "http://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Lear to google....",
          link: "http://google.org",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap");
body {
  margin: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
