// // let str = 'hello Vova'
// // let str2 = ', Vovaend'
// // let s = str.concat(str2)
// // console.log(s)
// // console.log(s.toUpperCase())
// // console.log(s.toLowerCase())
// // console.log(s.startsWith('hel'))
// // console.log(s.endsWith('end'))
// // console.log(s.substring(0,7))
// // console.log(s.indexOf('l'))
// // console.log(s.lastIndexOf('l'))
// // console.log(s.charAt(4))
// // console.log(str.replaceAll('llo', 'LLA'));
// // console.log(s.split(' ')[0]);
//
// // let array = 'name:Vova'
// // console.log(array.split(':'));
//
// let arr =[];
// console.log(Array.isArray(arr));
// console.log(arr.push('item0'));
// console.log(arr.push('item1'));
// console.log(arr.push('item2'));
// console.log(arr.push('item3'));
// console.log(arr.push('item4'));
// console.log(arr.push('item5'));
// console.log(arr)
//
// arr.pop();
// console.log(arr);
//
// console.log(arr.unshift('!!!'));
// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr);
//
// let join = arr.join('^');
// console.log(join);
//
// let nums = [11,22,33];
// let concat = arr.concat(nums) + arr.concat(join);
// console.log(concat);
//
// console.log(nums.reverse());
//
// console.log(concat);
// let splitConcat = concat.split(',');
// let splitConcat2 = splitConcat.split('^')
// console.log(splitConcat2)
//

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

users.sort((a,b) => {
    if (a.name > b.name)
})

// let sort = users.sort((u1, u2) => {
//     return u1.age - u2.age;
// })
// console.log(sort);


// users.map(value,index) => {
//     return (id:index+1
// }, name:value.name, age:value.age)

// let mappedUsers = users.map(function (value, index) {
// return  {...value, id:index+1});
// console.log(mappedUsers);

// let filteredUsers = users.filter(value => value.age > 30)
// console.log(filteredUsers);


// users.forEach((value, index) => console.log(value))

// users.forEach(function (value, index) {
//
//         console.log(index, value);
//  });