const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
//convierte la ruta en absoluta
const pathAbsolute = path.resolve(processArgv); 
//leer directorio para que lea tiene que tener una direccion (esto es cuando hay un path)ruta de prueba /Users/Sol/Desktop/SCL012-MD-Links-/
fs.readdir(pathAbsolute, function(err, files){
    //con el forEach ya no son un array
    files.forEach(function(files){
        if (path.extname(files) === '.md') {
            console.log(files);
        }
    })
});
//--------------------------------------hasta aqui lee directorio y los filtra por md-----//
const options = {
  stats: false,
  validate: false,
};

process.argv.forEach((element) => {
  if (element === '--stats' || element === '--s' || element === 's') {
    options.stats = true;
  } else if (element === '--validate' || element === '--v' || element === 'v') {
    options.validate = true;
  }
});

cliMdLinks.cliMdLinks(path, options)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

const cliMdLinks = (path, options) => new Promise((resolve, reject) => {
  mdLinks.mdLinks(path, options).then((links) => {
    if (links.length === 0) {
      resolve(colors.red('La ruta ingresada no contiene Links'));
    } else if (options.validate && options.stats) {
      resolve(mdLinks.statsValidateOptions(path));
    } else if (options.validate) {
      resolve(mdLinks.validateOptions(path));
    } else if (options.stats) {
      resolve(mdLinks.statsOptions(path));
    } else {
      const stringLinks = links.map((link) => `${link.file} ${link.href} ${link.text}`);
      resolve(colors.blue(stringLinks.join('\n')));
    }
  }).catch((err) => {
    reject(err);
  });
});

//module.exports = ext-link;
