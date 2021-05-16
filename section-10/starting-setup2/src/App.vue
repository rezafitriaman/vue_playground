<template>
  <the-header :title="headerTitle"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheResources from "./components/learning-resources/TheResources";
export default {
  name: "App",
  components: {
    TheHeader,
    TheResources
  },
  data() {
    return {
      headerTitle: 'Remember me',
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
