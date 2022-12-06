// // for (let i = 0; i <= 10; i++) {
// //        if (i % 2 == 1) continue;
// //     console.log(i);
// // }
//
// // let i =0;
// // while (i<=3) {i++;console.log(`number is ${i}!`)}
//
// // let answer;
// // do {answer = prompt(`it should be more than 100`,'')
// // } while (+answer < 100);
//
// // let n =100;
// // nextPrime:
// // for (let i = 2; i<= n; i++) {
// //     for (let j= 2; j < i; j++) {
// //         if (i % j == 0) continue nextPrime}
// //     console.log(i);
// // }
//

// function showMessage(string, str = ': *no string*') {
//     if (string === 'Vova') {
//     let message = 'Good morning, ';
//     console.log(message+string+str)
//     } else {console.log('Nope')}
// }
//
// showMessage('Vova', ' sf');

// Check age
// function checkAge(age) {
//     if (age>=18) {
//         alert('Nice to see you!')
//     }  else if (age < 18) {
//         confirm('Maybe Disney?')
//         if (confirm === true) {
//             alert ('Ok! disney.com is waiting for U!')
//         } else {alert('was nice 2 see u')}
//     } else {alert('weird age')}
// }
//
// let age = prompt('gimme your age','')
//
// checkAge(age)

// function checkAge(age = 'no val') {
//     return (age > 18) || console.log('2young')
// }
//
// checkAge(19)

// function checkAgeOther(age) {
//     return (age >= 18) ? console.log('good') : console.log('not good')
// }
//
// checkAgeOther(18)

// function minValue(val1,val2) {
// if (val1 > val2) {
//     console.log(val2)
// }    else if (val1 < val2) {
//     console.log(val1)
// } else  if (val1 = val2) {
//     console.log('equal')
// } else {console.log('Nan')}
// }

function pow(val, power) {
    let result = val;

    for (let i = 1; i < power; i++) {
    result *=val;
    }
        return result;
}

let val = prompt('val?','');
let power = prompt('power');

if (power < 1) {
    alert(`Power ${power} is not supported`)
} else {
    alert(pow(val,power))
}
