const { myFunction } = require('./exercise1');

const args = [];
while (args.length < 3) {
  args.push(Math.floor(Math.random() * 100));
};

myFunction(...args)
  .then(console.log)
  .catch(console.log);

