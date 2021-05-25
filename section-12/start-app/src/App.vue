<template>
  <learning-survey @survey-submit="storeSurvey"></learning-survey>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LearningSurvey from './components/survey/LearningSurvey'

export default {
  name: 'App',
  components: {
    LearningSurvey
  },
  data() {
    return {
      saveSurveyResults: []
    }
  },
  methods: {
    storeSurvey(surveyData){
      console.log(surveyData);
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
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
