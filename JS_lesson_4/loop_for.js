// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10 ; i++) {
//     document.write(`<div>iter</div>`)
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
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
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     document.write(`<ul><li>anon ${user.name} - ${user.age*12}</li></ul>`)
//     document.write(`<h3> His status is <span class="status">${user.status}</span></h3>`)
//     document.write('---------------------------------+')
//
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// //
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// //
// // ШАБЛОН
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`
//  <div class="product-card">
// <h3 class="product-title">${product.title} Price - ${product.price}</h3>
// <img src="${product.image}" alt="${product.title}" class="product-image">
// </div>`)
//
// }

// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
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



// for (const user of users) {
//     if (user.age >=30) {
//         console.log(user.name)
//     } else {
//         console.log(user.status)
//     }
// }


// // for (const user of users) {
// //     if (user.status == false) {
// //         document.write(`<h1>This is ${user.name}, he is ${user.status}</h1>`)
// //     }
// //
// // }
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age<=29) {
//         document.write(`
// <card>
// <h2>this is ${user.name}</h2>
// <h3>and he is ${user.age}</h3>
//
// </card>`)
//     }
//     else if (user.age>28) {
//         document.write(`${user.name} target older , and he is ${user.age}`)
//         document.write(`<br>`)
//     }
// }
//
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років

// for (const user of users) {
//   if (user.status === true) {
//       console.log(user)
//   }
// }
