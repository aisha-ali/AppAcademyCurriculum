function foo(arg) {
  return arg;
}

foo(5); // => 5
foo(); // => undefined


function logArguments(arg1, arg2) {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }

  return result
}

logArguments("boop", "candle", 3); // ["boop", "candle", 3]


function thisWorks() {
  let args = Array.prototype.slice.call(arguments);
  args instanceof Array; //=> true
  args.forEach((arg) => console.log(arg)); // This works!
}

function thisWorksToo() {
  let args = Array.from(arguments);
  args instanceof Array; //=> true
  args.forEach((arg) => console.log(arg)); // This works too!
}


function argumentsWay(firstArg) {
  console.log(`The first arg is ${firstArg}!`);

  // We grab the arguments and call slice with 1 to eliminate the firstArg
  let otherArgs = Array.prototype.slice.call(arguments, 1);
  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}

function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);

  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}

function madLib(verb, pluralNoun1, pluralNoun2, place) {
  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;
}

const words = ["eat", "socks", "rabbits", "sea"];

madLib(...words); // equivalent to 'madLib(words[0], words[1], words[2], words[3])'
//=> "I like to eat socks with rabbits by the sea."


const myFunction = (v, w, x, y, z) => { }
const args = [2, 3];
myFunction(1, ...args, 4, ...[5]); // v = 1, w = 2, x = 3, y = 4, z = 5



function add(x, y = 17) {
  // y is 17 if not passed or passed as `undefined`
  return x + y;
}

add(3) === 20; //=> true
add(3, undefined) === 20; //=> true