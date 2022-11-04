const list = [1, 2, 3, 4, 5, 6, 7, 8];

const haveEven = list.some((item) => {
   return item === 100;
  }
)
console.log(haveEven);

const haveEvenShort = list.some(item => item === 100);

console.log(haveEvenShort);

// const allAreEvent = list.every(item => item % 2 === 0)
// console.log(allAreEvent);

// const allAreNumber = list.every(item => typeof item === 'number')
// console.log(allAreNumber);

// const eventNumberList = list.filter((item) => item % 2 === 0);
// console.log(eventNumberList);

// const sum = list.reduce((previous, current) => current + previous, 0);
// console.log(sum);

const object = {
  foo: 'A', // [key]: value
  bar: true,
  bax: 1,
};

const arrayOfObject = [{
  foo: 'A', // [key]: value
  bar: true,
  bax: 1,
}, {
  foo: 'B', // [key]: value
  bar: true,
  bax: 1,
}, {
  foo: 'C', // [key]: value
  bar: true,
  bax: 1,
}]

console.log(arrayOfObject[2].foo);

const arrayOfNumber = [1,2,3,4];