const path = require('path');
const fs = require('fs');
const directoryPath = path.resolve(process.argv[2]);

//lee directorio
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('No es posible leer el directorio: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    if (path.extname(file) === '.' + 'md') {
      console.log(file)
    }
  })
})

