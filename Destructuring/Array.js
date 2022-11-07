const colors = ['Red', 'Yellow', 'Blue'];

const withoutES6Syntax = () => {
  // Get individual color
  const red = colors[0];
  const yellow = colors[1];
  const blue = colors[2];

  console.log(red); // red
  console.log(yellow); // yellow
  console.log(blue); // blue
}

const destructing = () => {
  // Array Destructing using ES6 syntax
  const [red, yellow, blue] = colors;
  console.log(red); // red
  console.log(yellow); // yellow
  console.log(blue); // blue
}

const destructingWithRest = () => {
  // Array Destructuring Assignment and Rest syntax
  const [red, ...restColors] = colors;
  console.log(red); // red
  console.log(restColors); // [yellow, blue]
}

const destructingWithDefaultVaue = () => {
  // Assign default value
  const [red, yellow, blue, orange = 'orange', green] = colors;
  console.log(red); // red
  console.log(yellow); // yellow
  console.log(blue); // blue
  console.log(orange); // orange
  console.log(green); // undefined
}

withoutES6Syntax();
// destructing();
// destructingWithRest();
// destructingWithDefaultVaue();