const calculator = function (operationCb) { // high-order function
  return function (op1, op2) { // closure
    console.log(`calling with ${op1} ${op2}`);
    const result = operationCb(op1, op2);
    console.log(`equals ${result}`);
  };
}

const addition = function (n1, n2) { // callback
  console.log(`${n1} + ${n2}`);
  return n1 + n2;
}

const adder = calculator(addition);
adder(1, 2);