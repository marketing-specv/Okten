// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User ('Vova', 37, true);
// let user2 = new User ('Lena', 33,true);
// console.log(user2)


// function User(name, age, status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// new User ('Vova',37,true, {
//     name: 'Lena',
//     age: 33,
//     status: true
// })

// function User(name, age, status,wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name:wifeName, age:wifeAge}
//     this.greeting = function () {
//         console.log(`${this.name} and ${this.wife.name} is ${this.age + this.wife.age} years old in sum`)
//     }
// }
//
// let user = new User('Vova',37,true,'Lena',33)
// user.greeting()

//  function User(name,age) {
//      this.name = name;
//      this.age = age
//  }
// //
// // let user = new User('Vova',37);
// // user.greeting = function () {
// //     console.log(`Hi ${this.name}`);
// // }
// //
// // user.greeting()
//
// User.prototype.greeting = function () {
//     return `hello, my name is ${this.name}`;
// }
//
// let user = new User('Vova','37')
// console.log(user.greeting());

//  function User(name,age) {
//      this.name = name;
//      this.age = age
//  }
//
// let user = new User('Vova',37);
// user.greeting = function (msg,asd) {
//     return `${msg} Hi ${this.name} ${asd}`;
// }
// // console.log(user.greeting());
//
// let user2 = new User('Lena',33)
// // console.log(user2);
// console.log(user.greeting.apply(user2, ['hi', 'asd']));
//
// console.log(user.greeting.call(user2, 'hi11', 'asd11'));
//
// let greetingCopy = user.greeting.bind(user2,'message','aassdd');
// console.log(greetingCopy('dddssss'));


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

        // static greeting(){
        //     return `my name is ${this.name}`;
        // }

        // greeting(){
        //     return `my name is ${this.name}`;
        // }

        work () {
            return `work in process`
    }
}

class Customer extends User {

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }

    work() {
        return super.work();
    }
}

let customer = new Customer('Vova', 37, 112233);
console.log(customer.work());


// let user = new User('Vova',31);
// console.log(user);
// console.log(user.greeting());

// console.log(User.greeting());