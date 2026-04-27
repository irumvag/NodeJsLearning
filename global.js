//console.log(global);
global.setTimeout(() => {
  console.log('In the timeout!');
  clearInterval(timer);
}, 3000);

const timer = setInterval(() => {
  console.log('In timer');
}, 1000);

console.log(__dirname);
console.log(__filename);
