// constructor function
function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

// cat instances to test out 
const cat1 = new Cat('Butters', 'Aisha');

console.log(cat1.cuteStatement());


Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}!`;
};
console.log(cat1.cuteStatement());

Cat.prototype.meow = function () {
  return 'meow';
};

console.log(cat1.meow());

// setting the meow property on the instance
cat1.meow = function () {
  return 'purr';
};

console.log(cat1.meow());

