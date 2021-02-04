// ES5:
function foo(arg1) {
  return function (arg2) {
    return function (arg3) {
      console.log(`${arg1} came before ${arg2} and ${arg3} came last`);
    };
  };
}

// ES6:
const foo = arg1 => arg2 => arg3 => {
  console.log(`${arg1} came before ${arg2} and ${arg3} came last`);
};