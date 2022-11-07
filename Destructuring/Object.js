const foo = {
  bar: 'Bar Text',
  bax: 12345,
  baz: true,
  list: ['A', 'B', 'C', 'D'],
  nested: {
    o: null,
    p: '',
    x: 'x text',
    y: 'y text',
    z: 'z text',
  },
};

const withoutES6Syntax = () => {
  console.log(foo.bar); // Bar Text
  console.log(foo.bax); // 12345
  console.log(foo.baz); // true
  console.log(foo.list); // ['A', 'B', 'C', 'D']
};

const destructing = () => {
  // Object Destructing using ES6 syntax
  const { bar, bax, baz, list } = foo;

  console.log(bar); // Bar Text
  console.log(bax); // 12345
  console.log(baz); // true
  console.log(list); // ['A', 'B', 'C', 'D']
}

const destructingWithRest = () => {
  // Object Destructuring Assignment and Rest syntax
  const { bar, ...rest } = foo;
  console.log(bar); // Bar Text
  console.log(rest); // { bax: 12345,  baz: true, list: ['A', 'B', 'C', 'D'] }
}

const destructingWithDefaultValue1 = () => {
  const { other = 'default value' } = foo;
  console.log(other); // default value
}

// when the object is undefined
const destructingWithDefaultValue2 = () => {
  const { other } = foo;
  const { x } = other || {};
  console.log(x); // undefined
  console.log(x || 'default value'); // 'default value'
}

// when the attribute is null or empty string
const destructingWithDefaultValue3 = () => {
  const { nested } = foo;
  const { o = 'o default value', p = 'p default value' } = nested;
  console.log(o); // null
  console.log(p); // ''
}

const destructingWithRename = () => {
  const { bar: anything } = foo;
  console.log(anything); // Bar Text
  console.log(bar); // undefined
}

const destructingNestedObject = () => {
  const foo = {
    bar: 'Bar Text',
    bax: 12345,
    baz: true,
    list: ['A', 'B', 'C', 'D'],
    nested: {
      o: null,
      p: '',
      x: 'x text',
      y: 'y text',
      z: 'z text',
    },
  };

  const { nested: { x, y } } = foo;
  console.log(x); // x text
  console.log(y); // y text

  // or
  // const { nested } = foo;
  // const { x, y } = nested;
  // console.log(x); // x text
  // console.log(y); // y text
}

withoutES6Syntax();
// destructing();
// destructingWithRest();
// destructingWithDefaultValue1();
// destructingWithDefaultValue2();
// destructingWithDefaultValue3();
// destructingWithRename();
// destructingNestedObject();