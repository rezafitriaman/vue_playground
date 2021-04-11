<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <form @submit.prevent="submitData">
          <input
            class="form-control mb-2"
            type="text"
            placeholder="Enter your name"
            aria-label="Name"
            v-model="enteredName"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Enter your age"
            aria-label="Age"
            v-model="enteredAge"
          />
          <button type="submit" class="btn btn-primary mt-2">Set value</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }
};
</script>