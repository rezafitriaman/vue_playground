<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
            <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
            <base-button v-if="!isCoach && !isLoading" link to="/register">Register as a Couch</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>

</template>

<script>
import CoachItem from "../../components/coaches/CoachItem";
import CoachFilter from "../../components/coaches/CoachesFilter";
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches =  this.$store.getters['coaches/coaches'];
      let filteredCoaches = coaches.filter(coach => {
        if(this.activeFilters['frontend'] && coach.areas.includes('frontend')) {
          console.log('frontend');
          return true
        }
        if(this.activeFilters['backend'] && coach.areas.includes('backend')) {
          console.log('backend');
          return true
        }
        if(this.activeFilters['career'] && coach.areas.includes('career')) {
          console.log('career');
          return true
        }
        console.log('nothing');
        return false
      });
      return filteredCoaches;
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    }
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      console.log('updatedFilters', updatedFilters);
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    }
  }
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>