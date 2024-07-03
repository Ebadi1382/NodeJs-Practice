const alireza = (a, b) => {
  return a + b;
};
const alireza2 = (a, b) => {
  return a - b;
};
const alireza3 = (a, b) => {
  return a * b;
};
const alireza4 = (a, b) => {
  return a / b;
};

// module.exports.alireza = alireza;
// module.exports.alireza2 = alireza2;
// module.exports.alireza3 = alireza3;
// module.exports.alireza4 = alireza4;

// single export
// module.exports = alireza;

console.log(__filename);
console.log(__dirname);

module.exports = {
  alireza,
  alireza2,
  alireza3,
  alireza4,
};
