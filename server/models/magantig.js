const mysql = require('mysql');
// const pdfMake = require('pdfmake');
const pdfMake = require("../../node_modules/pdfmake/build/pdfmake.min.js");
const pdfPrinter = require('../../node_modules/pdfmake/src/printer.js');
const fs = require('fs');
  var fonts = require("../../node_modules/pdfmake/build/vfs_fonts.js");

var maganTIG = function(data) {


var printer = new pdfPrinter(fonts);

// getting all the variables, for making the pdf
// var rendszam = data[0].Prendszam;
// var idoszak_eleje = data[0].Pkezdet;
// var idoszak_vege = data[0].Pvege;
// var ceg = data[0].Pceg;

// teszt adatok
var rendszam = "NDN239";
var idoszak_eleje = "2018-01-01";
var idoszak_vege = "2018-01-29";
var ceg = "Meló-Diák Dél Iskolaszövetkezet";


var pdf = {
  content: [
    {
      text: `KIKÜLDETÉSI RENDELVÉNY (A hivatali, üzleti utazás költségtérítéséhez)\n`
    }

  ]
}
// pdfMake.createPdf(pdf).print();
var pdfDoc = printer.createPdfKitDocument(pdf);
pdfDoc.pipe(fs.createWriteStream('teszt.pdf'));
pdfDoc.end();

}

module.exports = {maganTIG}
