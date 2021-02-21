const app = new Vue({
    el: '#assignment',
    data: {
        tasks: [],
        input: '',
        show: true
    }, 
    computed: {
        dynamicText: function() {
            return (this.show) ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask: function() {
            console.log(this.input) 
            this.tasks.push(this.input)
            this.input = ''
        },
        hideAndShowBTN: function() {
            this.show = !this.show
        },
        deleteList: function(index) {
            this.tasks.splice(index, 1);
        }
    },
});

document.querySelector('#ul').addEventListener('click', function() {
    console.log(this);
});