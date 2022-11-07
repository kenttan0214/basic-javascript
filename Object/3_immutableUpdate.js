/**
 * immutable objects are unchangeable. They’re like a statement of fact or a source of truth.
 * The data or variable will remain the same.
 * To work with new data, you’d need to make a copy of the object and use the copy from that point onwards
 * Reference: https://www.tiny.cloud/blog/mutable-vs-immutable-javascript/
 */

const setNameToUpperCase = (user) => {
  return {
    ...user,
    name: user.name.toUpperCase(),
  }
}

const setActive = (user) => {
  return {
    ...user,
    isActive: true,
  }
}

const user = {
  name: 'Kent',
  isActive: false,
};

console.log('Original Copy (Before Modify)', user);

const updatedName = setNameToUpperCase(user);
const updatedStatus = setActive(user);

console.log('Original Copy (After Modify)', user);
console.log('Updated Name', updatedName);
console.log('Updated Status', updatedStatus);