const list = [1, 2, 3, 4, 5, 6, 7, 8];

const allAreEvent = list.every(item => item % 2 === 0)
console.log(allAreEvent);

const allAreNumber = list.every(item => typeof item === 'number')
console.log(allAreNumber);
