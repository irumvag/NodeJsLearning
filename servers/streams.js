const fs = require('fs');
const readStream = fs.createReadStream('./doc/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./doc/blog4.txt');
/*
readStream.on('data', (chunk) => {
  console.log('___new-chunk___');
  //console.log(chunk.toString());
  console.log(chunk);
  writeStream.write('\nNew CHUNK\n');
  writeStream.write(chunk);
});
*/

readStream.pipe(writeStream);
