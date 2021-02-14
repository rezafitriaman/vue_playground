const app = new Vue({
    el: '#assignment',
    data: {
        firstButton: 'Add 5',
        secondButton: 'Add 1',
        number: 0
    },
    watch: {
        result: function() {
            console.log('watch')
            setTimeout(() => {
                this.number = 0
            },2000);
        }
    },
    computed: {
        result: function() {
            if(this.number < 37) {
                return 'Not there yet'
            }else if(this.number > 37) {
                return 'Too much!'
            }else {
                return this.number
            }
        }
    },
    methods: {
        addNumber: function(num) {
            this.number = this.number + num
            console.log(this.number)
        }
    },
});

/* const app = new Vue({
    el: '#assignment',
    data: {
        firstButton: 'Add 5',
        secondButton: 'Add 1',
        result: 0,
        message: 'click pls', 
        timeoutOn: true
    },
    watch: {
        result: function(val){
            console.log('val',val)

            if(this.timeoutOn) {
                this.timeoutOn = false;
                setTimeout(() =>{
                    this.result = 0
                    this.message = 'Again'
                    this.timeoutOn = true;
                },5000);
            }
        }
    },
    methods: {
        addButton(button) {
            if(button === 'first') {
                this.result = this.result + 5
            }else {
                this.result = this.result + 1
            }
            console.log(this.result)
            if(this.result < 37) {
                this.message = 'Not there yet'
            }else if(this.result > 37) {
                this.message = 'Too much!'
            }else {
                this.message = this.result
            }
        },
    },
});   */

