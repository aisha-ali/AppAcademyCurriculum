
// surrogate version
Function.prototype.inheritsA = function (BaseClass) {
  function Surrogate() {}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


// Object.create version
Function.prototype.inheritsB = function (BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

