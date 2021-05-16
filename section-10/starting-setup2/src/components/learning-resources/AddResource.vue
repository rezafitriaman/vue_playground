<template>
    <base-dialog v-if="inputisInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you entered at least a few characters into each input field</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="title">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="title">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputisInvalid: false
        }
    },
    methods: {
        confirmError() {
            this.inputisInvalid = false; 
        },
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredLInk = this.$refs.linkInput.value;

            if (enteredTitle.trim() === '' || 
                enteredDesc.trim() === '' || 
                enteredLInk.trim() === '') {
                    this.inputisInvalid = true;
                    return;
            }

            this.addResource(enteredTitle, enteredDesc, enteredLInk);
            this.$refs.titleInput.value = '';
            this.$refs.descInput.value = '';
            this.$refs.linkInput.value = '';
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>