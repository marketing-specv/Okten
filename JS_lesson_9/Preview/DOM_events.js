let target = document.querySelector('.target')
// // console.log(target);
//
// target.onclick = function (e) {
//     console.log(e)
// }
//
// target.onmouseover = function (e) {
//     console.log(e);
// }
//
// target.onmousemove = function (e) {
//     console.log(e)
// }
let f1 = document.forms.f1;
document.forms.f1.login.oninput = function () {
    let value = this.value
    console.log(value)
    if (value.includes('хуй')) {
        alert('хуй')
    }

    // target.innerHTML = this.value

}