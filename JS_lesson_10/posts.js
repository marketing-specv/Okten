let url = new URL(location.href)
console.log(url);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user)

fetch(`https://jsonplaceholder.typicode.com/users/${user}/posts`)
    .then((response) => response.json())
    .then(posts => {
        let ul = document.createElement("ul");
        for (const post of posts) {
            let li = document.createElement("li")
            li.innerText = post.title;
            ul.appendChild(li)

        }
    document.body.appendChild(ul)
    })