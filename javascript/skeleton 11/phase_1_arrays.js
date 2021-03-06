Array.prototype.uniq = function () {
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
};

console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.uniq2 = function () {
  let uniqueArray = [];

  this.forEach(function (el) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });

  return uniqueArray;
};


Array.prototype.twoSum = function () {
  const pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
};


Array.prototype.twoSum2 = function () {
  let pairs = [];
  const indexHash = {};

  this.forEach((el, idx) => {
    if (indexHash[el * -1]) {
      const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

      pairs = pairs.concat(newPairs);
    }

    indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
  });

  return pairs;
};

console.log([-1, 0, 4, -5, 3].twoSum());


Array.prototype.transpose = function () {

  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};

console.log([[7, 3, 4], [1, 4, 8], [5, 3, 2]].transpose());

