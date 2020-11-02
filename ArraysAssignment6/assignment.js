const numbers = [1, 2, 3, 4, 11, 12, 13, 20];

const numbersGreaterThan5 = numbers.filter(val => val > 5);
console.log(numbersGreaterThan5);

const mapNumbers = numbers.map(val => ({num: val}));
console.log(mapNumbers);

const multiplyArray = numbers.reduce((multiplyResult, currentValue) => multiplyResult * currentValue, 1);
console.log(multiplyArray);

function findMax(...nums) {
    let currentMax = nums[0];
    for (const num of nums) {
      if (num > currentMax) {
        currentMax = num;
      }
    }
    return currentMax;
  }
  console.log(findMax(...numbers));

  function findMinMax(...nums) {
    let currentMax = nums[0];
    let currentMin = nums[0];
    for (const num of nums) {
      if (num > currentMax) {
        currentMax = num;
      }
      if (num < currentMin) {
        currentMin = num;
      }
    }
    return [currentMin, currentMax];
  }
  
  const [min, max] = findMinMax(...numbers);
  
  console.log(min, max);

  const newList = new Set();
newList.add(10);
newList.add(-5);
newList.add(-5);

console.log(newList);