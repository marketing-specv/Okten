let mainDiv = document.createElement('div');
mainDiv.classList.add('main');
document.body.appendChild(mainDiv);

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
    for (const user of users) {
        let user = document.createElement('div');
        user.classList.add('user');
        user.innerText = `${user.id}. ${user.name}`;
        mainDiv.appendChild(user)
}
    })
