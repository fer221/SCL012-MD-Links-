const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
const markdownLink = require('markdown-link-extractor');
//convierte la ruta en absoluta
const pathAbsolute = path.resolve(processArgv); 

//leer link 
//con el readfile estoy leyendo los archivos 
exports.readFile = (pathAbsolute) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathAbsolute, 'utf8', (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  })
} 
exports.readFile(pathAbsolute)
//con el markdowlink solo estoy filtrando los link del archivo 
  .then(data => console.log(markdownLink(data)))
  .catch(error => console.log(error));

  //module.exports = path;