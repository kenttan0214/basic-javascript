// simple object
const foo = {
  bar: 'String Value',
  bax: 12345,
  baz: true,
  list: ['A', 'B', 'C', 'D'],
}

// complex object
const bar = {
  bar: 'String Value',
  bax: 12345,
  baz: true,
  foo: {
    bonus: 300,
    enable: false,
    businessCode: [1, 2, 3],
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
}