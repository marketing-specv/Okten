// // let arr;
// // arr = [10,'Vova',0,-4,5];
// // console.log(arr);
// // console.log(arr.length);
// // console.log(arr[3]);
// //
// // arr[0] = 11;
// // console.log(arr);
// // arr[5] = 111;
// //
// // console.log(arr[0]-arr[3]);
// // arr[arr.length] = 'sdf';
// // console.log(arr);
//
// let arr = [
//     [22,33,44,55],
//     [],
//     []
// ]
//
// console.log(arr)
//
// let firstArray = arr[0];
// console.log(firstArray[0,2], arr[0][1] );

// let user1 = {
//     id:1,
//     name:'Vova',
// age:131,
//     skills:['html', 'js', 'css']
// }
//
// console.log(user1.skills[2]+[0]);

// let users = [
//     {skills:['html', 'mysql', 'mongo'],id:1, name:'vasya',age:32, status:true},
//     {skills:['html', 'js'],id:2, name:'petya',age:32, status:true},
//     {skills:['html', 'js'],id:3, name:'kolya',age:32, status:true},
//     {skills:['html', 'mysql', 'mongo'],id:4, name:'sveta',age:32, status:true}
// ]
//
// let user0 = users[0];
//
// console.log(user0 .age)
// console.log(users[0].skills[2])

let a = 100;
let b = a;
b = b + 10;
console.log(a);

let user = {name: 'vasya'};
let user2 = user;
console.log(user2);
user2.age = 31;
console.log(user2);
console.log(user)