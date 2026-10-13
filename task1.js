
let arr = [];
arr[0] = 10;
arr[1] = "Hello";
arr[2] = true;
arr[3] = null;
console.log("Кількість елементів:", arr.length);
let userInput = prompt("Введіть будь-яке значення:");
arr[4] = userInput;

console.log("П'ятий елемент:", arr[4]);
