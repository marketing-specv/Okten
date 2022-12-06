//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// if (min>=0 && min<=15) {
//     alert('First');
// } else if (min>=16 && min<=30) {
//     alert('Second');
// } else if (min>=31 && min<=45) {
//     alert('Third')
// } else if (min>=46 && min<=60) {
//     alert('Fourth')
// } else {
//     alert('FROM 0 to 60 ONLY')};

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на
// екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let mon = {
//     label: 'MON',
//     label_full: 'Monday',
//     };
//
// let tue = {
//     label: 'TUE',
//     label_full: 'Thuesday',
// };
//
// let wed = {
//     label: 'WED',
//     label_full: 'Wednesday',
// };
//
// let thr = {
//     label: 'THR',
//     label_full:'Thursday'
// };
//
// let fri = {
//     label: 'FRI',
//     label_full: 'FRIDAY',
// };
//
// let sat = {
//     label: 'SAT',
//     label_full: 'SATURDAY',
// };
//
// let sun = {
//     label: 'SUN',
//     label_full: 'SUNDAY'
// };
//
// let ask = +prompt('enter from 1 to 7')
// switch (ask){
//     case 1:
//     alert(mon.label_full+', скорочено - '+mon.label);
//     case 2:
//     alert(tue.label_full);
//     case 3:
//     alert(wed.label_full);
//     case 4:
//     alert(thr.label_full);
//     case 5:
//     alert(fri.label_full);
//     case 6:
//     alert(sat.label_full);
//     case 7:
//     alert(sun.label_full);
//     default:
//         alert('123123123');}


 // if (ask===1){
 //     alert(mon.label_full+', скорочено - '+mon.label);
 // } else if (ask===2) {
 //     alert(tue.label_full);
 // } else if (ask===3) {
 //     alert(wed.label_full);
 // } else if (ask===4) {
 //     alert(thr.label_full);
 // } else if (ask===5) {
 //     alert(fri.label_full);
 // } else if (ask===6) {
 //     alert(sat.label_full);
 // } else if (ask===7) {
 //     alert(sun.label_full);
 // } else {alert('123123123')}

//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let first = +prompt('First number');
let second = +prompt('Second number');

if (first>second) {
    alert(first);
} else if (first<second) {
    alert(second);
} else if (first===second) {
    alert('Equal');
} else {'Int only'}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)