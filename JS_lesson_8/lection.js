function User(name,age,skills,wife) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.wife = wife;
    this.greeting = function (msg) {
        console.log(`${msg} my name is ${this.name}`)
    }
}

// console.log(user1);
// console.log(user1.greeting('hello'))

let user1 = new User('Vova',31,[],{name:'Lena', age:33});
const friend = {
    name:'Anton',
    asd:'asd',
    qwe:'qwe',
}

// user1.greeting.call(friend,'hello');
// user1.greeting.apply(friend,['aloha','qwe']);

// let greetingCopy = user1.greeting.bind(friend);
// greetingCopy('Privit')

/*Prototype*/
// Array.prototype.printSelf = function () {
//     console.log(this)
// };
//
// const numbers = [11,22,33];
// numbers.printSelf()

class UserPuser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`hello, my name is ${this.name}`)
    }

}

let userPuser = new UserPuser('Vova',12)
console.log(userPuser);
userPuser.greeting()

class SuperUser extends UserPuser{

    constructor(name, age, skills) {
        super(name, age);
        this.skills = skills;
    }
}

let superUser = new SuperUser('Vasya',21,[11,22,33]);
superUser.greeting();
console.log(superUser);

function Admin(login,password) {
    this.login = login;
    this.password = password;
}

function SuperAdmin(login,password,authority) {
    Admin.apply(this, arguments)
    this.authority = authority;
}

const superAdmin = new SuperAdmin('qqq','11','asd')
console.log(superAdmin);