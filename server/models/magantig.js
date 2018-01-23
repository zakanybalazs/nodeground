const mysql = require('mysql');
const request = require('ajax-request');
const pdfMake = require("../../node_modules/pdfmake/build/pdfmake.min.js");
const pdfPrinter = require('../../node_modules/pdfmake/src/printer.js');
const fs = require('fs');
const Fonts = require("../../node_modules/pdfmake/build/vfs_fonts.js");

var maganTIG = function({text}) {
var fonts = {
      Roboto: {
          normal: 'fonts/Roboto-Regular.ttf',
          bold: 'fonts/Roboto-Medium.ttf',
          italics: 'fonts/Roboto-Italic.ttf',
          bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      }
  };
var printer = new pdfPrinter(fonts);

//getting all the variables, for making the pdf
var rendszam = text.Prendszam;
var idoszak_eleje = text.Pkezdet;
var idoszak_vege = text.Pvege;
var ceg = text.Pceg;
var nmbr = 123456;
/* TODO : ki kell találni, hogyan lehetne ezt betűvé alakítani */
/* TODO : ki kell találni, hogyan az sql adatbázisból adatokat kérni */

var server = mysql.createConnection({
  host     : "localhost",
  user     : 'promothe_sqlu',
  password : 'B4l4Zs',
  database : 'promothe_sql'
})
server.connect();


/*
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
*/
/* TODO : ki kell találni, hogyan lehetne választ küldeni a requestre */



var pdf = {
  content: [
    {
      text: `KIKÜLDETÉSI RENDELVÉNY (A hivatali, üzleti utazás költségtérítéséhez)\n`,
      style: 'header'
    },
    {
      text: 'szamszoveg'
    },
    {
      table: {
        widths: ['*','*','*','*'],
        body: tableContent(rendszam,idoszak_eleje,idoszak_vege,ceg),
        fontSize: 5
      }
    }
  ],
  styles: {
    header: {
      fontSize: 14,
      alignment: "center"
    },
    tableRow: {
      fontSize: 8
    }
  }
}
// pdfMake.createPdf(pdf).print();
var pdfDoc = printer.createPdfKitDocument(pdf);
pdfDoc.pipe(fs.createWriteStream('teszt.pdf'));
pdfDoc.end();

}
server.end();
module.exports = {maganTIG}
