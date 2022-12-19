let menu = document.getElementsByClassName('menu')[0];
menu.style.display = 'flex';
menu.style.justifyContent = 'space-around';
let blockArray = ['Main','Products','About us','Contacts'];
for (const block of blockArray) {
    let li = document.createElement('li');
    li.innerText = block;
    li.style.margin = '0 15px';
    menu.appendChild(li);
    }
