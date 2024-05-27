// Assalamualaikum @everyone 👋
// 🚀 Day 19 Challenge: Start Coding! 🚀
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [11, 12, 13, 14, 15];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log("Original array: ", numbers);
console.log("Doubled the numbers of array: ", doubledNumbers);
console.log("\n");
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArray = [1, true, "Mango", 40, "Fish"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log("Mixed Array: ", mixedArray);
console.log("Only String: ", stringsArray);
console.log("\n");
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [66, 57, 84, 96, 79, 85];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log("List of grades: ", grades);
console.log("Average Grade: ", averageGrade);
