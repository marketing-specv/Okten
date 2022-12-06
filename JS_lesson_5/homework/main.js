// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//
// const square = (a,b) => a*b;
// console.log(square(10, 10));
//
// function blockCalc(height, width) {
//     let c;
//     c = height*width;
//     console.log(c + ' cm/sq');
// }
// debugger;
// blockCalc(11,21);

// // // - створити функцію яка обчислює та повертає площу кола з радіусом r
// //
// // function circle(radius) {
// // let ploscha=radius*3.14
// //     console.log(ploscha)
// //     return ploscha
// // }
// // circle(15)
//
// const squareCirkle = (r) => Math.PI * Math.pow(r, 2)
// console.log(squareCirkle(5));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinder(height, radius) {
//     let s;
//     let pi = 3.14;
//     s = 2*pi*radius*(height+radius)
//     console.log(`площа циліндру з висотою ${height} та радіусом ${radius} буде складати ${s}`)
//     return s
// }
//
// cylinder(24, 234)
// const cylinder = (r,h) =>Math.PI * Math.pow(r, 2) * h;
// console.log(cylinder(5, 2));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function foo(array) {
//     for (const arrayElement of array) {
// console.log(arrayElement)
//     }
// }
// foo(users)
//
// function arr(user) {
//     for (let i = 0; i < users.length; i++) {
//         const userElement = user[i];
//     console.log(userElement)
//     }
// }
//
// arr(users)

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function textParagraph(text) {
//     document.write(`<p> DEMO- ${text} -DEMO`)
// }
//
// textParagraph('TEST_TEXT')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function uList(text) {
//     document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>
// `)
// }
//
// uList ('Lizhko')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function listOfThree(text, quant) {
//     document.write(`
//         <ul>
//         `)
//     for (let i = 0; i < quant; i++) {
//         const textElement = text[i];
//         document.write(`
//         <li>${text}</li>
//         `)
//     }
// }
//
// listOfThree('demo', 3)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let arr = [false,'petya',30];
// const elem = function (array) {
//         document.write(`<ul>`)
//          for (const item of array) {
//             document.write(`<li>${item}</li>`); }
//          document.write(`</ul>`)
//     }
//
// elem(arr);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function userPush(id, name, age) {
//     document.write(`
//     <div>User id is ${id}</div>
//     <div>User name is ${name}</div>
//     <div>User age is ${age}</div>
//     `)
// }
//
// userPush(1111,'Vova',37)
//
// const arr = [
//     {
//         name: 'Vasya',
//         age: 22
//     },
//     {
//         name: 'Petya',
//         age: 33
//     }
// ]
//
// const users = function (array) {
//     for (const user of array) {
//         document.write(`${user.name} -- ${user.age} <br>`)
//     }
// }
// users(arr)
// - створити функцію яка повертає найменьше число з масиву



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [2,3,4,5];
// let res = Math.min(...arr);
// console.log(res)


// function arrSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//
//     }
//
// }



// for (const uKey in u) {
//     console.log(uKey);
// }

const arr = [1,2,3,44,2];
const max = (array) => {
let max = array[0];
    for (const item of array) {
        if (item > max) {
            max=item;
        }
    }
    return max
}

console.log(max(arr))