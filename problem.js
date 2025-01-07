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
// console.log(bookTitles);


// 4. Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// Array of car objects
const cars = [
    { make: "Toyota", model: "Corolla", year: 2005 },
    { make: "Honda", model: "Civic", year: 2010 },
    { make: "Ford", model: "Mustang", year: 2000 },
    { make: "Tesla", model: "Model 3", year: 2018 }
  ];
   
  function sortCarsByYear(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
  }
   
  const sortedCars = sortCarsByYear(cars);
  
  // Print the sorted array
//   console.log(sortedCars);


// 6. Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
   
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
function sumOfEvenNumbers(numArray) {
  return numArray.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

// Calculate the sum of even numbers
const sumEven = sumOfEvenNumbers(numbers);

// Print the result
// console.log(sumEven);


// 10. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
 
const items = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 15 },
    { quantity: 1, price: 12 },
    { quantity: 4, price: 5 }
  ];
   
  function calculateTotalValue(itemArray) {
    return itemArray.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  }
   
  const totalValue = calculateTotalValue(items);
  
  // Print the result
  console.log(totalValue);
  