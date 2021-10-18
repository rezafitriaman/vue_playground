<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <h2>Register a s a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm';

export default {
  components: {
    CoachForm
  },
  data() {
    return {
      error: null,
    }
  },
  methods: {
    async saveData(data) {
      try {
        // dispatch this to coaches/actions
        await this.$store.dispatch('coaches/addCoach', data);
        await this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>