let url = new URL(location.href);
let id = url.searchParams.get('id');
let userPostId = url.searchParams.get('userPostId')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp => resp.json())
    .then(posts => {
        let ul = document.createElement('ul')
        for (const post of posts) {
            let li = document.createElement('li');
            li.classList.add('text');
            li.classList.add('line2')
            li.innerHTML = `* ${post.title}`;
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    })
