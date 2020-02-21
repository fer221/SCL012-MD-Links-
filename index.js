// module.exports = () => {
//   // ...
// };
const mdLinks = require('./mdLinks.js')
const fetch = require('node-fetch'); //libreria de fetch
const chalk = require('chalk'); //libreria de tiza
const pathDoc = process.argv[2];
let options = {
  validate: false,
  stats: false
}

mdLinks(pathDoc, options).then((arrayLinksMd) => {
//valores de option 
  if (process.argv[3] === '--validate' && process.argv[4] === '--stats' || process.argv[4] === '--validate' && process.argv[3] === '--stats') {
    options.validate = true;
    options.stats = true;
    let urlArray = [];
    let arrayStatusOk = 0;
    let arrayStatusFail = [];

    arrayLinksMd.forEach(element => {
//con el forEach ya no son un array 
      urlArray.push(element.href)

      fetch(element.href).then(res => {
        if (res.status >= 200 && res.status <= 309) {
          arrayStatusOk = arrayStatusOk + 1;

        } else if (res.status >= 400) {
          arrayStatusFail.push(res.status);

        }
      });
    })
//valores de option
   } else if (process.argv[3] === '--validate') {
    options.validate = true;
    arrayLinksMd.forEach((element) => {
      fetch(element.href).then(res => {

        if (res.status >= 200 && res.status <= 309) {
          console.log(`|Status:(✔✔ ) ${chalk.greenBright(res.status)} ${chalk.green(res.statusText)}  | File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.blueBright(res.url)} `);

        } else if (res.status >= 400) {
          console.log(`|Status:(✘ )  ${chalk.redBright(res.status)} ${chalk.red("FAIL")}| File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.redBright(res.url)} `);

        }
      }).catch(err => {
        console.log(`|Status:( ⚠ ) |File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.yellowBright(res.url)}<--- Este enlace presenta problemas` + err);
      });

    });
  } else if (process.argv[3] === '--stats') {
    options.stats = true;
    let urlArray = [];
    arrayLinksMd.forEach(element => {
      urlArray.push(element.href)
    })

    let uniqs = new Set(urlArray);
    // chalk es una libreria para cambiar los colores

    console.log(`|Links de: ${chalk.cyanBright(pathDoc)} |TOTAL  | ${chalk.yellowBright(arrayLinksMd.length)} `);
    console.log(`|Links de: ${chalk.cyanBright(pathDoc)} |UNICOS | ${chalk.blueBright(uniqs.size)} `);
  } else {
    arrayLinksMd.forEach((element) => {
      console.log(`|File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.blueBright(element.href)}`);
    });
  }
});
module.exports = mdLinks;