
// ================= Завдання №1 ==============================
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = prompt(Number);
// if (Number(number) === 10){
//     alert("It's right!");    
// } else if(typeof number === "string"){
//     alert("Wrong");
// } else if(!false){
//     alert("Canceled!");
// }


// ================= Завдання №2 ============================

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Number(Math.floor(Math.random() * (59 - 0) + 0));

// if(min >= 0 && min <15){
//     alert(`${min} - is the first quarter`);
// } else if(min >= 15 && min < 30){
//     alert(`${min} - is the second quarter`);
// } else if(min >= 30 && min < 45){
//     alert(`${min} - is the third quarter`);
// } else{
//     alert(`${min} - is the fourth quarter`);}


// ================ Завдання №3 ============================

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const number = prompt("number");
// let result;
// switch(Number(number)){
//     case 1:
//         result = "Winter";
//         break;
//     case 2:
//         result = "Spring";
//         break;
//     case 3:
//         result = "Summer";
//         break;
//     case 4:
//         result = "Fall";
//         break;
//     default:
//         result = "Wow, it's not the correct number!";
// }
// alert(result);

// =============== Завдання №4 ===============================

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const number = prompt("Number");

// const hours = String(Math.floor(number/60)).padStart(2,"0");
// const minutes = String(number % 60).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

// function usefulTime(){
//     const inputMinutes = number;
//     const hours = (Math.floor(inputMinutes/60)).toString().padStart(2, "0");
//     const minutes = (Math.floor(inputMinutes % 60)).toString().padStart(2, "0");
//     return `${hours} hours ${minutes} minutes`
// }

// console.log(usefulTime());


// ================= Завдання №5 =============================

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const userName = prompt("Enter your name");

// const admin = "Admin";
// const password = "Boss";

// if(userName === admin){
//     const itsAdmin = prompt("Enter password!");
    
//     if(itsAdmin === password){
//         alert("Hello!");
//     }else if(!itsAdmin){
//         alert("You have canceled or entered an empty string!");
//     }else {
//         alert("Wrong password!!");
//     } 
// }else if(!userName){
//     alert("Canceled or empty string")
// }else{
//     alert("I don't know you!!")
// }


// =============== Завдання №6 =============================

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let x = 0;

// while(x <= 20){
//     console.log(x);
//     x += 1;
// }

// let count = 0;

// ================ Завдання №7 ===========================

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


// let total = 0;

// function getNumbers(min, max){
//     for(let i = max; i >= min; i--){
//         if(!(i % 2)){
//             console.log(i);
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(getNumbers(1, 16));


// ================ Завдання №8 ===========================

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b){
//         const typeIsNumber = (typeof a === "number") && (typeof b ===   "number");
//     if(typeIsNumber && (!isNaN(a) && !isNaN(b))){
//         if(a < b){
//             return a;
//         } return b;
//     } else {
//         return "Some attributes are not a number";
//     }
// }
// console.log(min(12, -15));


// ================ Завдання №9 ===========================
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     return age >= 18 ? true : confirm("True?");
// }

// console.log(isAdult(17));

// ================ Завдання №10 ===========================
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     if(!(num % 3) && !(num % 5)){
//         console.log("fizzbuzz");        
//     } else if(!(num % 3)){
//         console.log("fizz");        
//     }else if(!(num % 5)){
//         console.log("buzz");        
//     }else {
//         console.log("This number is not divisible by 3 or 5!");        
//     }
// }

// fizzBuzz(18);
// fizzBuzz(17);
// fizzBuzz(15);
// fizzBuzz(12);
