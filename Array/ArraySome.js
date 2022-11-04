const list = [1, 2, 3, 4, 5, 6, 7, 8];

const haveEven = list.some((item) => {
   return item === 100;
  }
)
console.log(haveEven);

//shorten the code
const haveEvenShort = list.some(item => item === 100);
console.log(haveEvenShort);
