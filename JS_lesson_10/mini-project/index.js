fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            // div.classList.add('fakeScreen')
            div.classList.add('text')
            div.classList.add('line1')
            div.innerHTML = `${user.id} - ${user.name.toUpperCase()} - `;
            let a = document.createElement('a');
            // a.classList.add('text');
            a.classList.add('line2');
            a.innerHTML = 'user Details>>>';
            a.href = `user-details.html?id=${user.id}`;
            div.append(a);

            let fakeScreen = document.getElementsByClassName('fakeScreen')[0];
            fakeScreen.appendChild(div)
            }
    })