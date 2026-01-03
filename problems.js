//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "John", age: 28, gender: "male" },
  { name: "Sarah", age: 24, gender: "female" },
  { name: "Michael", age: 35, gender: "male" },
  { name: "Emily", age: 30, gender: "female" },
  { name: "David", age: 40, gender: "male" },
];
const males = people.filter(person => person.gender !== "female")
const names = males.map(male => male.name)
console.log(names)