// /* - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)*/
//
// let userArray = [];
//
// function User(id, name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
//     this.email = name+'@'+surname+'.com';
//     userArray.push(this)
//     }
//
//
// let user1 = new User(1,'Vova','Lazarchuk','+68545485455')
// let user2 = new User(2,'Vasya','Pikkin','+35666655855')
// let user3 = new User(3, 'Galya','Pomidorkina','6++6+6+6666')
// let user4 = new User(4,'Petya','Frolow','45654555544')
// let user5 = new User(5,'Max','Maxov','44565786352')
// let user6 = new User(6,'Zhenya','Sur','4536845585412')
// let user7 = new User(7, 'Vlad','Vladov','+5576322298922')
// let user8 = new User(8,'Valera', 'Valerianov', '+752224456654')
// let user9 = new User(9,'Ira','Romashkina','541541444553')
// let user10 = new User(10,'Natasha','Korol','+988855255321')
// /* - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
// let filteredUsers = userArray.filter(value => value.id > 5)
// console.log(filteredUsers);
// /*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort) */
// let sortedUsers = userArray.sort(function (a,b) {
//     return a.id - b.id
// })
//
// console.log(sortedUsers);

// /* - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
//  товарів)
//  */
// let clientArray = [];
// class Client {
//
//     constructor(id,name, surname,phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = `${this.name}@${this.surname}.com`;
//         this.phone = phone;
//         this.order = order;
//         clientArray.push(this)
//         }
// }
//
// let client = new Client('1','Vova','Lazarchuk','+380671144799',['bread','salt']);
//
// /* створити пустий масив, наповнити його 10 об'єктами Client */
//
// let client2 = new Client('2','Petya','Petrovich','+380654778855',['milk', 'bread','salt'])
// let client3 = new Client('3','Kolya', 'Nikolaev','+380545544777',['burger','tomatoes','protein','salt'])
// let client4 = new Client('4','Max','Maximov','+80554447788',['coca-cola'])
// let client5 = new Client('5','Pepa', 'Svinka','+380447775566', ['burger','tomatoes','protein','salt','milk'])
//
// /*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по
//  зростанню. (sort)
//  */
//
// let sortedClient = clientArray.sort(function (a,b) {
//     return a.order.length - b.order.length
// })
//
// console.log(sortedClient);

// /* - Створити функцію конструктор яка дозволяє створювати об'єкти car,
//  з властивостями модель, виробник, рік випуску, максимальна швидкість,
//  об'єм двигуна. додати в об'єкт функції:*/
//
// function Car(model, manufacturer, year, maxSpeedKm, engineVolumeCubicCm) {
//     this.model = model;
//     this.manucaturer = manufacturer;
//     this.year = year;
//     this.maxSpeedKm = maxSpeedKm;
//     this.engineVolumeCubicCm = engineVolumeCubicCm;
//
//     /*-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*/
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeedKm} кілометрів на годину`)
//     }
//
//     /* -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*/
//     this.info = function () {
//         console.log(
//             `
//             model:${model}
//             manufacturer:${manufacturer}
//             year:${year}
//             maxSpeedKm:${maxSpeedKm}
//             engineVolumeCubicCm:${engineVolumeCubicCm}
//         `
//         )
//     }
//
//     /* -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*/
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(`Ми пришвидшились до ${this.maxSpeedKm + newSpeed} кілометрів на годину`)
//     }
//
//     /* -- changeYear (newValue) - змінює рік випуску на значення newValue*/
//     this.changeYear = function (newYearValue) {
//         this.year = newYearValue
//                    }
//     /* -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('CX90','Volvo',2022,300,200)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(100)
// car1.changeYear(1999)
// console.log(`Автомобіль виготовленний у ${car1.year} році`);
// car1.addDriver({name:'Petya', surname:'Petrov'})
// console.log(car1);

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeedKm, engineVolumeCubicCm) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeedKm = maxSpeedKm;
//         this.engineVolumeCubicCm = engineVolumeCubicCm;
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         if (isNaN(newSpeed)) {
//             console.log(`This shit ${newSpeed} is not a number`)
//         } else {
//
//         this.maxSpeedKm = this.maxSpeedKm + newSpeed
//         console.log(`Ми пришвидшидись до ${this.maxSpeedKm} кілометрів на годину! Воу`);}
//     }
//
//     changeYear (newYearValue) {
//         if (isNaN(newYearValue)) {
//             console.log(`This shit ${newYearValue} is not a number`)
//         } else {
//             this.year = newYearValue
//             console.log(`Time machine is getting us to ${this.year}`);
//         }
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//         console.log(this.driver)
//     }
//
//
//
// }
//
// const car1 = new Car('cs90','BMW',2020,250,35);
// car1.increaseMaxSpeed(60)
// car1.changeYear(1199)
// car1.addDriver({name:'Vasya', year:1988})
// console.log(car1)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const cinderellaArray = [];
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
        cinderellaArray.push(this)
        console.log(`New Cinderella with name ${this.name}, age ${this.age} and footSize ${this.footSize} cm is made`)
    }

}

const cinderella1 = new Cinderella('Olya',18,42)
const cinderella2 = new Cinderella('Galya',21,37)
const cinderella3 = new Cinderella('Ira',33,39)
const cinderella4 = new Cinderella('Valya',23,38)
const cinderella5 = new Cinderella('Katya',30,40)
const cinderella6 = new Cinderella('Olya',22,36)
const cinderella7 = new Cinderella('Galya',24,41)
const cinderella8 = new Cinderella('Ira',25,39)
const cinderella9 = new Cinderella('Valya',26,38)
const cinderella10 = new Cinderella('Katya',27,40)

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    cinderellaFinder () {
        for (const rightCinderella of cinderellaArray) {
            if (rightCinderella.footSize == this.shoeSize) {
                console.log(`--- Princess is ${rightCinderella.name}, and she is ${rightCinderella.age} years old ---`)
            }
            }
        }
    }


const prince = new Prince('Vasya', 35,36);
prince.cinderellaFinder()