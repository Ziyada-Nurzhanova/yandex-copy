// Обьявление переменной и присвоения ей значения ввода пользователем
let mood = prompt("How are you?");
//Вывод данных в консоль
document.writeln("Your mood is " + mood);
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
// Массивы, в массивах отчет элементов начинается с 0
let colors = ["Red", "Blue", "Green"];
document.writeln(colors[0]);
// Команда new позволяет добавлять в массив новые элементы
let colorsf = new Array("Red", "Blue", "Green");
colorsf[3] = "Grey";
document.writeln(colorsf[3]);
// В массивы можно записывать абсолютно оюбые значения: строки, булевые значения и числа с плавающей точкой
// Команда push добавляет новый элемент в конец массива и является более удобным
colorsf.push("Yellow");
// Циклы
for (let i = 10; i > 10; i++) {
  console.log(i);
}
