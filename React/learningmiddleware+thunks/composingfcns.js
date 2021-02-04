const compose = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};

const timesTwo = (num) => num * 2;
const plusSix = (num) => num + 6;

const plusThenTimes = compose(timesTwo, plusSix);
plusThenTimes(3); //=> 18

const timesThenPlus = compose(plusSix, timesTwo);
timesThenPlus(3); //=> 12

