const app = new Vue({
    el: '#assignment',
    data: {
        message: 'Event Practice',
        inputOne: '',
        inputTwo: ''
    },
    methods: {
        showAlert: function () { 
            const text = (this.inputOne === '') ? 'Hello! I am an alert box!!' : this.inputOne;
            window.alert(text);
        },
        outputOne: function (event) {
            console.log(event.target.value);
            this.inputOne = event.target.value;
        },
        outputTwo: function (event) {
            console.log('enter pressed');
            this.inputTwo = this.inputOne;
        }
    },
});