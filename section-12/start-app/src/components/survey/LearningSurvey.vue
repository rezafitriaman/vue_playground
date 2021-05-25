<template>
  <section>
    <base-card>
      <h2>How was you leaning experience?</h2>
      <form>
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            name="rating"
            value="poor"
            v-model.trim="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            name="rating"
            value="average"
            v-model.trim="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            name="rating"
            value="great"
            v-model.trim="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check uour provided data</p>
      </form>
      <div>
          <base-button type="submit" @click="submitSurvey">Submit</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            chosenRating: null,
            invalidInput: false
        }
    },
    emits: ['survey-submit'],
    methods: {
        submitSurvey(event) {
            event.preventDefault();
            console.log('submitSurvey')
            if(this.enteredName === '' || !this.chosenRating) {
                this.invalidInput = true
                return
            }
            this.invalidInput = false

            this.$emit('survey-submit', {
                userName: this.enteredName,
                rating: this.chosenRating
            })

            this.enteredName = ''
            this.chosenRating = null
        },
        test() {
            console.log('test');
        }
    }
}
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

input[type='text'] {
    display: block;
    width: 20rem;
    margin-top: 0.5rem;
}
</style>