const sayHello = name => console.log('Hi ' + name);

const sayHello1 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello2 = () => console.log('Hi Hard-coded!');
const sayHello3 = name => 'Hi ' + name;

sayHello('Fui');
sayHello1('Fui', 'Hello');
sayHello2();
console.log(sayHello3('Fui'));

const sayHello4 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello4('Ocloo');
sayHello4('Ocloo', 'Hello');

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
