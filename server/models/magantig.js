const mysql = require('mysql');
const pdfMake = require('pdfmake');
var maganTIG = function(data) {
// getting all the variables, for making the pdf
var rendszam = data[0].Prendszam;
var idoszak_eleje = data[0].Pkezdet;
var idoszak_vege = data[0].Pvege;
var ceg = data[0].Pceg;

// teszt adatok
var rendszam = "NDN239";
var idoszak_eleje = "2018-01-01";
var idoszak_vege = "2018-01-29";
var ceg = "Meló-Diák Dél Iskolaszövetkezet";


var pdf = {
  content: [

  ]
}


}

module.exports = {maganTIG}
