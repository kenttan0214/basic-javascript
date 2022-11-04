const list = [1, 2, 3, 4, 5, 6, 7, 8];

let newList = [];

for (let i = 0; i < list.length; ++i) {
  if (list[i] % 2 === 0) {
    newList.push(0);
  } else {
    newList.push(list[i]);
  }
}

console.log(newList);