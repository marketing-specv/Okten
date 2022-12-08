// let h2 = document.createElement('h2')
// h2.innerText = 'hello from function .createElement and .appendChild'
// document.body.appendChild(h2)

// let allUsersDiv = document.getElementsByClassName('users')[0]
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
// for (const user of users) {
//     let div = document.createElement('div')
//     div.classList.add('user')
//     div.innerText = user.name
//     allUsersDiv.appendChild(div)
// }

for (const user of users) {
    let userInfoDiv = document.createElement('div');

    let h2 = document.createElement('h2')
    h2.innerText = user.name;

    let p = document.createElement('p')
    p.innerText = user.status + ' ' + user.age

    userInfoDiv.append(h2, p)


    document.body.appendChild(userInfoDiv)
}
