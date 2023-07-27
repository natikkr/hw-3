//Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
//приклад:
//const arr = [5, 3, 4, 5,6,7,3];
//const arr2 = compact(arr);
//console.log(arr2) ; // [5,3,4,6,7]

function compact(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);


//Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:

//початкове значення
//кінцеве значення
//а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
//let arr = createArray(2, 9);
//console.log(arr); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let arr_2 = createArray(2, 9);
console.log(arr_2); // [2, 3, 4, 5, 6, 7, 8, 9]


//Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

function printNumbers(a, b) {
  const numbers = [];
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      numbers.push(i);
    }
  }
  return numbers;
}

const a = 3;
const b = 8;
const result = printNumbers(a, b);
console.log(result); // [3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8]

//Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
//randArray(5);  // [399,310,232,379,40]
function randArray(k) {
  const array = [];
  for (let i = 0; i < k; i++) {
    const randNum = Math.floor(Math.random() * 500) + 1;
    array.push(randNum);
  }
  return array;
}

const resultArr = randArray(5);
console.log(resultArr); // Наприклад: [399, 310, 232, 379, 40]

//Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
//let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/
function separateTypes(arr5) {
  const numbersArray = [];
  const stringsArray = [];
  function processArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        numbersArray.push(array[i]);
      } else if (typeof array[i] === 'string') {
        stringsArray.push(array[i]);
      } else if (Array.isArray(array[i])) {
        processArray(array[i]);
      }
    }
  }
  processArray(arr5);

  return [numbersArray, stringsArray];
}

let arr5 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = separateTypes(arr5);
console.log(arrNew);
/* 
[
  [5, 12, 99, 2, 2, 4, 3],
  ["Limit", "a", "3", "33", "a", "text", "strong", "broun"]
]
*/

//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
//Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log(calc(6, 4, 1));
console.log(calc(6, 4, 2));
console.log(calc(6, 4, 3));
console.log(calc(6, 4, 4));

//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
//findUnique([1, 2, 3, 5, 3]);  // => false
//findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
  const unique = new Set(arr);
  return unique.size === arr.length
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));