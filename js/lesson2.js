
// ================= Завдання №1 ==============================
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// styles[styles.indexOf('blues')] = 'classic'

// console.log(styles);


// ================= Завдання №2 ==============================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// function checkLogin(array) {
//     const userName = prompt("Enter your name, please.");
//     if(array.indexOf(userName) === -1){
//         return "User is not found";        
//     }
//     alert(`Welcome ${userName}!`);
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];

// console.log(checkLogin(logins));


// ================= Завдання №3 ==============================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(numbers) {
//     let total = 0;

//     for(const number of numbers){
//         total += number;
//         // console.log(total);
//     }

//     return total / numbers.length;
// }

// const arrayNumbers = [1, 2, 3, 4, 5, 6];
// console.log(calculateAverage(arrayNumbers));



// ================= Завдання №4 ==============================
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.


// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function createNewArray(array) {
//     const newArray = [];
    
//     for(let i = 0; i < array.length -1; i++){
//         newArray.push(array[i] + array[i + 1]);
//         console.log(newArray);        
//     }

//     return newArray;
// }

// console.table(createNewArray(someArr));


// ================= Завдання №5 ==============================
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, -56, 12, 24, -7, 80, 3];
// // const numbers = "Hello!";

// function findSmallestNumber(array) {
//     if(Array.isArray(array)){
//         let min = array[0];
//         for(const item of array) {
//             if(item < min){
//                 min = item;
//             }
//         }
//         return min;
//     }
//     return 'Sorry, it is not an array!'
// }

// console.log(findSmallestNumber(numbers));


// ================= Завдання №6 ==============================
// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//     const arrayFromString = string.split(" ");
//     let londestWord = arrayFromString[0];
    
//     for(const word of arrayFromString){
//         if(word.length > londestWord.length) {
//             londestWord = word;
//         }
//     }
//     return londestWord;
// }


// ================= Завдання №7 ==============================
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// // // user['premium'] = false;
// // const newAmountPremium = 'premium';
// // user[newAmountPremium] = false;


// const keys = Object.keys(user)

// for(const item of keys) {
//     console.log(`${item} : ${user[item]}`);
// };

// console.log(user);

// ================= Завдання №8 ==============================
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;
// const items = Object.values(salaries)

// for(const salary of items) {
//     sum += salary;
// }

// // for(const item in salaries) {
// //     sum += salaries[item];
// // }

// console.log(sum);


// ================= Завдання №9 ==============================
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b){
//         a;
//         b;
//         console.log(a, b);
        
//     },
//     sum(a, b){
//       return a + b;
//     },
//     mult(a, b){
//       return a * b;
//     },
//     existr(){
//         const keys = Object.keys(calculator);
//         for(const key of keys){
//             if(read.hadOwnProperties(a)){
//                 console.log("Yes");
                
//             }
//         }
//     },
// }

// console.log(calculator.sum(5, 8));
// console.log(calculator.mult(5, 8));
// console.log(calculator.read(5, 2));
// calculator.read(5,2);
// calculator.existr()



// ================= Завдання №10 =============================
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function callcTotalPrice(fruits, fruitName) {
//     let totalCoast = 0;
//     let totalQuantity = 0;

//     for(const fruit of fruits){        
//         if(fruit.name === fruitName){
//             totalQuantity += fruit.quantity;
//             totalCoast += fruit.price * fruit.quantity; 
//         }
//     }
    
//     return `Total coast of ${fruitName} is ${totalCoast}, total quantity is - ${totalQuantity}`
// }

// console.log(callcTotalPrice(fruits, "Банан"));
