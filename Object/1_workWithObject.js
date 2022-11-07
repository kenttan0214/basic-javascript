// simple object
const foo = {
  bar: 'Default Bar Value',
  bax: 12345,
  baz: true,
  list: ['A', 'B', 'C', 'D'],
}

// immutable
// update foo.baz to false, without modifying the original copy
const updateFoo1 = {
  ...foo,
  baz: false,
}

// update foo.bar and add foo.members, without modifying the original copy
const updateFoo2 = {
  ...foo,
  bar: 'Updated Bar Value',
  members: [{
    id: 1,
    name: 'foo user',
    status: true,
  }, {
    id: 2,
    name: 'bar user',
    status: false,
  }]
}

// update updateFoo2.members, without modifying the original copy
const updateFoo3 = {
  ...foo,
  bar: 'Updated Bar Value',
  members: updateFoo2.members.map((member) => {
    return {
      ...member,
      isActive: true,
    }
  })
}

console.log('original copy', foo);
console.log('update 1', updateFoo1);
console.log('update 2', updateFoo2);
console.log('update 3', updateFoo3);
