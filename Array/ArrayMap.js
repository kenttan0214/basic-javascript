const list = [1, 2, 3, 4, 5, 6, 7, 8];

const newListinMap = list.map((item) => {
  if (item % 2 === 0) {
    return 0;
  }
  return item;
});

console.log(newListinMap);

// shorter the code
const newListinMapShort = list.map(item => item % 2 === 0 ? 0 : item);
console.log(newListinMapShort);
