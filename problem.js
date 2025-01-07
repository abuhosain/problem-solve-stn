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
      .filter(person => person.gender === "male") 
      .map(person => person.name);  
  }
   
  const maleNames = getMaleNames(people);
  console.log(maleNames);  
  