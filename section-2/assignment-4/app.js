const app = new Vue({
    el: '#assignment',
    data: {
        firstInput: '',
        hidden: false,
        inlineStyle: ''
    },
    methods: {
        changeClass: function(event) {
            console.log(event.target.value)
            this.firstInput = event.target.value;
        },
        showOrHide: function() {
            console.log('clicked')
            this.hidden = !this.hidden
        },
        changeBackground: function(event) { 
            console.log(event.target.value)
            this.inlineStyle = event.target.value
        }
    },
});