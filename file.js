const fs = require('fs');

//Reading file
fs.readFile('./doc/text.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

console.log('last line!');

//Writing file
fs.writeFile('./doc/blog1.js');
