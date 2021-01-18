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

