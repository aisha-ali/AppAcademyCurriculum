function range(start, end) {
  if (start === end) {
    return [];
  }

  let rang = range(start, end - 1);
  rang.push(end - 1);
  return rang;
}

console.log(`range(5, 9) = ${range(5, 9)}`);


function sumRec(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let lastNum = numbers[numbers.length - 1];
  return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);


// exp(b, n) = b * exp(b, n - 1)
function exp1(base, exponent) {
  return exponent === 0 ? 1 : (base * exp1(base, exponent - 1));
}

console.log(`exp1(2, 4) = ${exp1(2, 4)}`);

// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2)[for odd n]
function exp2(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    let subAnswer = exp2(base, exponent / 2);
    return subAnswer * subAnswer;
  } else {
    let subAnswer = exp2(base, ((exponent - 1) / 2));
    return subAnswer * subAnswer * base;
  }
}


function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}


function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  return arr.map((el) => {
    return deepDup(el);
  });
}

const array = [[2], 3];
const dupedArray = deepDup(array);

dupedArray[0].push(4);

console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

