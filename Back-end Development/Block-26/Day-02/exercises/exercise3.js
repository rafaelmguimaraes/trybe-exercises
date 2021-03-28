const { myFunction } = require('./exercise1');

const args = [];
while (args.length < 3) {
  args.push(Math.floor(Math.random() * 100));
};

const main = async() => {
  try {
    console.log(await myFunction(...args));
    await myFunction(...args, 'teste');
  } catch(error) {
    console.log(error);
  } 
};

main();
