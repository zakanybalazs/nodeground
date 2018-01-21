const express = require('express');
const fs = require('fs');
const _ = require('lodash');
const pdfmake = require('pdfmake');
const hbs = require('hbs');

var app = express();

// use template snipets for other templates
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); // to use hbs

hbs.registerHelper('getcurrentyear', () => {
  return new Date().getFullYear();
});

// rendering it to the page
app.get('/',(req, res) => {
  res.render('template.hbs', {
    // the variebles, that are used by the templates
    title: 'this is a new title for the page!'
  });
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});
