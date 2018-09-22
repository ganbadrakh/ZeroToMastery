// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});
console.log('foreach', double);

// Map, filter, reduce
const mapArray = array.map(num => num * 2);

// const mapArray = array.map(num => num * 2); because we have just one parameter
console.log('map', mapArray);

// filter
const filterArray = array.filter(num => num > 5);
// const filterArray = array.filter(num => num > 5); because of just one parameter
console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => accumulator + num, 5);
console.log('reduce', reduceArray);
