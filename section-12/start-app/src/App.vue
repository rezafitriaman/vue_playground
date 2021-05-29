<template>
  <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey> -->
  <learning-survey></learning-survey>
  <!-- <user-experiences :results="saveSurveyResults"></user-experiences> -->
  <user-experiences></user-experiences>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LearningSurvey from './components/survey/LearningSurvey'
import UserExperiences from './components/survey/UserExperiences'

export default {
  name: 'App',
  components: {
    LearningSurvey,
    UserExperiences
  },
  /* data() {
    return {
      saveSurveyResults: []
    }
  },
  methods: {
    storeSurvey(surveyData){
      console.log('surveyData', surveyData);
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString()
      }
      this.saveSurveyResults.push(surveyResult)
      console.log(surveyResult)
    }
  } */
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
