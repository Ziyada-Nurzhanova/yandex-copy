// Обьявление переменной и присвоения ей значения ввода пользователем
let mood = prompt("How are you?");
//Вывод данных в консоль
console.log("Your mood is " + mood);
// Вывод данных в всплывающем окне
alert("You are " + mood);
// Вывод сообщения в документе
document.write("The result is " + mood);
let first = 5;
let second = 10;
// Если поставить запятую, он складывает числа
document.write(mood, first + second);
// Если поставить плюс, он посчитает переменные за строки и просто обьеденит их
document.write(mood + first + second);
// Мы присваиваем переменной значения больше на 2 раза
first += 2;
// Выполняет математические операции, также часто можно писать html-элементы
document.write("<br>" + Math.PI);
