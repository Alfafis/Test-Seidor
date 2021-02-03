"use strict";

const fs = require("fs");
const readline = require("readline");

function convert(file) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file);
    // Handle stream error (IE: file not found)
    stream.on("error", reject);

    const reader = readline.createInterface({
      input: stream,
    });

    const array = [];
    var cabecalho = [];
    var cabecalhoLido = true;
    var lineValues = {};

    reader.on("line", (line) => {
      let teste = line.indexOf(";");
      if (teste > 0) {
        if (cabecalhoLido) {
          cabecalho = line.split(";");
          cabecalhoLido = false;
        } else {
          lineValues = line.split(";");
          let arrayLinha = "{";
          cabecalho.forEach((coluna, index) => {
            arrayLinha += '"' + coluna + '": "' + lineValues[index] + '",';
          });
          arrayLinha = arrayLinha.slice(0, -1);
          arrayLinha += "}";

          array.push(JSON.parse(arrayLinha));
        }
      }
    });

    reader.on("close", () => resolve(array));
  });
}

convert("./src/model/base.txt")
  .then((res) => {
    let data = JSON.stringify(res);
    fs.writeFileSync("./src/model/baseTratada.json", data);
  })
  .catch((err) => console.error(err));
