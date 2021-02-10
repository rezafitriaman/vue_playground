console.log("welkome vue");

var app = new Vue({
  el: "#assignment",
  data: {
    name: "Master Reza",
    age: 34,
    img: "https://cdn.pixabay.com/photo/2017/06/04/20/31/sheep-2372148_960_720.jpg",
  },
  methods: {
    in5Year: function () {
      return this.age + 5;
    },
    favorNumber: function () {
      return Math.random();
    },
  },
});
