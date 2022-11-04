const list = [{
  id: 199,
  enable: true,
  numbers: [1, 3, 5, 7, 9],
}, {
  id: 20,
  enable: false,
  numbers: [11, 13, 15, 17, 19],
}, {
  id: 12,
  enable: true,
  numbers: [2, 4, 6, 8, 10],
}, {
  id: 24,
  enable: false,
  numbers: [12, 13, 18, 17, 19],
}];

// add new item to the last index without modify the original copy
const addToLast = [...list, {
  id: 25,
  enable: true,
  numbers: [100, 101, 102],
}];

// add new item to the first index without modify the original copy
const addToFirst = [{
  id: 25,
  enable: true,
  numbers: [100, 101, 102],
}, ...list];

console.log('Original Copy', list);
console.log('Add to Last', addToLast);
console.log('Add to First', addToFirst);
