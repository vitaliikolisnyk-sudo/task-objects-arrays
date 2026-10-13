let salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};
let sum = 0;
let count = 0;

for (let key in salaries) {
  sum += salaries[key];
  count++;
}
let average = count > 0 ? sum / count : 0;
console.log("Сума зарплат:", sum);
console.log("Кількість співробітників:", count);
console.log("Середнє значення зарплати:", average);
