const list = [1, 2, 3, 4, 5, 6, 7, 8];

const eventNumberList = list.filter((item) => {
  return item % 2 === 0
});

// shorten the code
const eventNumberListShort = list.filter((item) => item % 2 === 0);
console.log(eventNumberListShort);
