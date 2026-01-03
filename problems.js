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

//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    year: 1999,
  },
  { title: "Design Patterns", author: "Erich Gamma et al.", year: 1994 },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    year: 2009,
  },
];

const bookTitle = (books) => {
    return books.map(book=>book.title)
}
console.log(bookTitle(books))

//Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (x) => x * x;
const doubleNumber = (x) => x * 2;
const addFive = (x) => x + 5;



const compose = (square,doubleNumber,addFive) => {
    return (number) => {
        return(addFive(doubleNumber(square(number))))
    }
}

const composeFn = compose(square, doubleNumber, addFive);
console.log(composeFn(2))

//Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "BMW", model: "X5", year: 2018 },
];

const sortedAscendingCars = cars.sort((carA, carB) => carA.year - carB.year)

console.log(sortedAscendingCars);

//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: "John", age: 28, gender: "male" },
  { name: "Sarah", age: 24, gender: "female" },
  { name: "Michael", age: 35, gender: "male" },
  { name: "Emily", age: 30, gender: "female" },
  { name: "David", age: 40, gender: "male" },
];
const searchingName = (name,changeableAge) => {
    persons.find(person => {
        if (person.name === name) {
             person.age=changeableAge
         }
    })
    return persons;
}
console.log(searchingName("John",26))
//Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const evenNumbers = [2, 4, 6, 8, 10]
const sum = evenNumbers.reduce((prev, acc) => prev + acc, 0)
console.log(sum)

//Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 3, 4, 5, 5, 6, 1]

const findUniqueNumbers = (numbers) => {
    const uniqueNumbers = [];
     numbers.filter(number => {
        
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number)
        }  
    })
    return uniqueNumbers;
    
}

console.log(findUniqueNumbers(numbers))

