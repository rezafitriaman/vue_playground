const app = new Vue({
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
                console.log('time out', this.timeoutOn)
                setTimeout(() =>{
                    console.log('time out');
                    this.result = 0
                    this.message = 'again'
                    this.timeoutOn = true;
                },5000);
            }
        }
    },
    methods: {
        addButton(button) {
            console.log(button)
            if(button === 'first') {
                this.result = this.result + 5
            }else {
                this.result = this.result + 1
            }
            console.log(this.result)
            if(this.result < 37) {
                this.message = 'Not there yet'
            }else if(this.result > 37) {
                this.message = 'Too mutch!'
            }else {
                this.message = this.result
            }
        },
    },
});  