// Assalamualaikum @everyone 👋

// 🚀 Day 19 Challenge: Start Coding! 🚀

// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers = [11,12,13,14,15];
let doubledNumbers = numbers.map(number => number *2);
console.log("Original array: ", numbers);
console.log("Doubled the numbers of array: ", doubledNumbers);
console.log(`\n`);

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = [1, true, "Mango", 40, "Fish"];
let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log("Mixed Array: ",mixedArray);
console.log("Only String: ", stringsArray);
console.log(`\n`);
 
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [66,57,84,96,79,85];
let averageGrade = grades.reduce((total, grade)=> total +grade ,0) / grades.length;
console.log("List of grades: ", grades);
console.log("Average Grade: ", averageGrade);

