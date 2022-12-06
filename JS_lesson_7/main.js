// console.log('start');
// try {
//     console.log(a);
// } catch (e) {
//     console.log(e);
// } finally {
//     alert('finally')
// }
//
// console.log('end');


// function calc(a,b) {
//         if (b===0) {
//             throw new Error('b is 0');
//         }
//         return a / b;
// }
//
// calc(10,0)

// let user = {
//     name: 'Vasya',
//     fn: 'Vas'
// };
// console.log(user?.name?.fn)


// let numbers = [11,22,33];
// let [a, b, c] = [11,22,33];
// console.log(a,b,c)

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let [user1,user2] = users;
console.log(user1);
console.log(user2);
