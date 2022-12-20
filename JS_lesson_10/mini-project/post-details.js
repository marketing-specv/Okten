let url = new URL(location.href);
let id = url.searchParams.get('id');
let userPostId = url.searchParams.get('userPostId');


fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}`)
    .then(resp => resp.json())
    .then(post => {
        let postCard = document.createElement('div');
        postCard.classList.add('fakeScreen');
        postCard.classList.add('text');
        postCard.classList.add('line1');
        postCard.innerHTML = `PostID: ${post.id}<br>TITLE >>> ${post.title}`;

        document.body.appendChild(postCard)

        let postBody = document.createElement('div')
        postBody.classList.add('fakeScreen');
        postBody.classList.add('text');
        postBody.classList.add('line3');
        postBody.innerText = `BODY >>> ${post.body}`;
        document.body.appendChild(postBody)
    })
    .then(fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}/comments`)
    .then(resonse => resonse.json())
    .then(comments => {
            // console.log(comments);
            for (const comment of comments) {
                    // console.log(comment.body);
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('fakeScreen');
                    commentDiv.classList.add('text');
                    commentDiv.classList.add('line4')
                    commentDiv.innerHTML = `---COMMENT---<br>CommentName: ${comment.name}<br>Email: ${comment.email}<br>Body: ${comment.body}`;
                    document.body.appendChild(commentDiv)
            }
    }))
