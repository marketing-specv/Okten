// console.log(document.body.innerHTML);
// console.log(document.body.children);
// console.log(document.getElementById('list-1'));

let Ulist1 = document.getElementById('list-1');
// console.log(Ulist1);
// console.log(Ulist1.children);

let ClassCollection = document.getElementsByClassName('menu')
// console.log(ClassCollection);

let TagCollection = document.getElementsByTagName('li')
// console.log(TagCollection);

let menus = document.querySelectorAll('.menu');
console.log(menus);

for (const li of TagCollection) {
    let innerText = li.innerHTML;
    innerText = `***${innerText}***`
    console.log(innerText);
}