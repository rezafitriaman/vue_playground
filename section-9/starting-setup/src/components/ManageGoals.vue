<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">set goal</button>
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <template v-slot:default>
                <h2>Input is invalid!</h2>
                <p>Please enter at least a few characters....</p>
                <button @click="confirmError">oke</button>
            </template>
        </error-alert>
    </teleport>
</template>

<script>
    import ErrorAlert from "./ErrorAlert.vue";
export default{
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            console.log(this.inputIsInvalid);
            if (enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>