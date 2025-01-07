// 1. Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// Array of objects representing people
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Edward", age: 40, gender: "male" },
];

// Function to filter out females and map to an array of names
function getMaleNames(people) {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const maleNames = getMaleNames(people);
//   console.log(maleNames);

// 2. Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "This is title 1", author: "Sharon", year: 1960 },
  { title: "This is title 2", author: "Sajid", year: 1949 },
  { title: "This is title 3", author: "Abid Hasan", year: 1925 },
  { title: "This is title 4", author: "Abu Hosain", year: 1951 },
];
 
function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

// Get the book titles
const bookTitles = getBookTitles(books);

// Print the result
console.log(bookTitles);
