// const express = require('express');
// const Vue = require('vue');
// const _ = require('lodash');
// const pdfmake = require('pdfmake');

new Vue({
  el: '#app',
  data: {
    text: "hello room",
    link: "https://google.com",
    finished_link: "<a href='https://google.com'>Google</a>",
    count: 0,
    x:0,
    y:0
  },
  computed: {
    counter: function() {
      return this.count > 5 ? "bigger than 5" : "smaller then 5";
    }
  },
  watch: {
    count: function(value) {
      
    }
  }
  methods: {
    changeText: function(event) {
      this.text = event.target.value;
    },
    sayHello: function() {
      return this.text; // so if we user seyHello in html, it will be the same
    },
    more: function() {
      this.count++;
    },
    move: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event) {
      console.log(event.target.value);
    }
  }
});
