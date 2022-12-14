let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp => resp.json())
    .then(posts => {
        let ul = document.createElement('ul')
        for (const post of posts) {
            let li = document.createElement('li');
            li.innerText = post.title;
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    })
