// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(function (item,i,array) {
//     console.log(item.length)
// })

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(function (item,i,array) {
//     console.log(item.toUpperCase())
// })

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// str.forEach(function (item,i,array) {
//     console.log(item.toLowerCase())
// })

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(string) {
// let s = string.split(' ')
//     console.log(s)
// }
// let arr = stringToarray(str);
//
// let str2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptatum.';
// let result = stringToarray(str2)
//

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const arr = [10,8,-7,55,987,-1011,0,1050,0];
// let string = arr.map (value => value.toString());
// console.log(string)

// // - створити функцію sortNums(direction), яка прймає масив чисел, та
// // сортує його від більшого до меньшого,
// // або навпаки в залежності від
// // значення аргументу direction.
//
// let nums = [11,21,3];
//
// function sortNums(arr, direction) {
//     if (direction == 'ascending') {
//         console.log(arr.sort((a, b) => a - b));
//     } else if (direction == 'descending') {
//         console.log(arr.sort((a, b) => b - a));
//     }
// }
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
let suits = [
     {suit:'spade', color:'red'},
     {suit:'diamond',color:'red'},
     {suit:'heart',color:'black'},
     {suit:'clubs',color:'black'}];
let values = [6 , 7 , 8 , 9 , 10 , 'ace' , 'jack' , 'queen' , 'king', 'joker']

function getDeck()
{
     let deck = new Array();

     for (let i = 0; i < suits.length; i++)
     {
          for (let x= 0; x < values.length; x++) {
               let card = {Value: values[x], Suit: suits[i]};
               deck.push(card);
          }
     }
     // console.log(deck);
     return deck
}

let deck = getDeck();

let sixs = deck.filter(value => value.color == 'red');

console.log(sixs);

// - знайти піковий туз



// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }