/**
 * Mutable objects can be modified (or mutated) after they’re created,
 * and transform into other data or variables.
 * Reference: https://www.tiny.cloud/blog/mutable-vs-immutable-javascript/
 */

const user = {
  name: 'Kent',
  isActive: false,
}

console.log('Original Copy (Before Modify)', user);

const setNameToUpperCase = () => {
  user.name = user.name.toUpperCase();
}

const setActive = () => {
  user.isActive = true;
}

setNameToUpperCase();
setActive();

console.log('Original Copy (After Modify)', user);