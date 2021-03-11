const app = new Vue({
  el:'#app',
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() { 
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;

      console.log('this.$refs :',this.$refs)
      // console.dir(this.$refs.userText);
    },
  },
});


const app2 = new Vue({
  el:'#app2',
  template: `
    <p>{{ favoriteMeal }}</p>
  `, 
  data() {
    return {
      favoriteMeal: 'Pizza'
    };
  }
});


// ....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log('222: ', proxy.longMessage);

/* ----------------------------------------------- */

const target = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get: function (target, prop, receiver) {
    console.log('target', target)
    console.log('prop', prop)
    console.log('receiver', receiver)
    if (prop === "message2") {
      target.message2 = receiver
    }
    console.log('...arguments', ...arguments)
    console.log('arguments', arguments)
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

proxy3.message2 = 'reza'
console.log('message1: ', proxy3.message1); // hello
console.log('message2:sssssss ', proxy3.message2); // world
