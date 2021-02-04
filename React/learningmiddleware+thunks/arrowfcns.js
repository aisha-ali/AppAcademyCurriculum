// normal callback function
function showEach(array) {
  array.forEach(function (el) {
    console.log(el);
  });
}

// fat arrow function
function showEach(array) {
  array.forEach(el => console.log(el));
}


function Cat(name) {
  this.name = name;
  this.toys = ['string', 'ball', 'balloon'];
};

Cat.prototype.play = function meow() {
  this.toys.forEach(function (toy) {
    console.log(`${this.name} plays with ${toy}`);
  });
};

const garfield = new Cat('garfield');
garfield.play();

// output
undefined plays with string
undefined plays with ball
undefined plays with balloon

Cat.prototype.play = function meow() {
  this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};

garfield.play();

//output
garfield plays with string
garfield plays with ball
garfield plays with balloon

const halfMyAge = myAge => {
  const age = myAge;
  return age / 2;
};
halfMyAge(30) === 15; // true



const clearFunction = () => ({});
typeof clearFunction() === "object"; // true




const sayHello = name => console.log(`Hi, ${name}!`);
