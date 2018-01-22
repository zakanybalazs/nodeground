const mysql = require('mysql');
// const pdfMake = require('pdfmake');
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


function tableContent(rendszam,idoszak_eleje,idoszak_vege,ceg) {
  var tableBody = [];
  var header = ['valami','valami2','valami kicsit hosszabb','valami3'];
  tableBody.push(header);
  for (var i = 0; i < 4; i++) {
    tableBody.push([{text: rendszam, style:'tableRow'},{text: idoszak_eleje, style:'tableRow'},{text: idoszak_vege, style:'tableRow'},{text: ceg, style:'tableRow'}]);
  }
  return tableBody;
}

var pdf = {
  content: [
    {
      text: `KIKÜLDETÉSI RENDELVÉNY (A hivatali, üzleti utazás költségtérítéséhez)\n`,
      style: 'header'
    },
    {
      text: rendszam
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

module.exports = {maganTIG}
