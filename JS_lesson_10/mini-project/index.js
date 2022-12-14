fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('main')
            div.classList.add('text')
            div.classList.add('line2')
            div.innerHTML = `${user.id} ${user.name} - `;
            let a = document.createElement('a');
            // a.classList.add('text')
            a.classList.add('line3')
            a.innerHTML = '*user Details>>><span class="cursor1">_</span>'
            a.href = `user-details.html?id=${user.id}`;
            div.append(a)
            document.body.append(div);
        }
    })