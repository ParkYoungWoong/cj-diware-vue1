let propertyName = 'alias'
const propertyAge = 'age'

const userA = {
  alias: 'Neo',
  age: 22,
  isValid: true
}
const userB = {
  [propertyName]: 'Neo',
  [propertyAge]: 22,
  ['isValid']: true
}

console.log(userA)
console.log(userB)
