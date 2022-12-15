let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then((user) => {
        let div = document.createElement('div');
        div.classList.add('userCard');

        let h2Name = document.createElement('h2');
        h2Name.classList.add('h2Name');
        h2Name.classList.add('text');
        h2Name.classList.add('line1');
        h2Name.innerHTML = `$ ${user.name.toUpperCase()} >>><span class="cursor1">_</span>`;

        let usernameIdDiv = document.createElement('div');
        usernameIdDiv.classList.add('usernameIdDiv');

        let id = document.createElement('div');
        id.classList.add('id');
        id.classList.add('text');
        id.classList.add('line2')
        id.innerText = `id: ${user.id}`;

        let username = document.createElement('div');
        username.classList.add('username');
        username.classList.add('text');
        username.classList.add('line2')
        username.innerHTML = `username: ${user.username} <br>--------<br><br>`;

        let email = document.createElement('div');
        email.classList.add('email');
        email.classList.add('text');
        email.classList.add('line2')
        email.innerText = `E-mail: ${user.email}`;

        let phone = document.createElement('div');
        phone.classList.add('phone');
        phone.classList.add('text');
        phone.classList.add('line2')
        phone.innerText = `Phone No: ${user.phone}`;

        let website = document.createElement('div');
        website.classList.add('website');
        website.classList.add('text');
        website.classList.add('line2')
        website.innerHTML = `Website: https://www.${user.website}/ <br>--------<br><br>`;

        let address = document.createElement('div');
        address.classList.add('address');
        address.classList.add('text');
        address.classList.add('line2')

        let zipcodeCity = document.createElement('div');
        zipcodeCity.classList.add('zipcodeCity');
        // zipcodeCity.classList.add('line2')
        zipcodeCity.innerText = `${user.address.city}, ${user.address.zipcode}`;

        let streetSuite = document.createElement('div');
        streetSuite.classList.add('streetSuite');
        // streetSuite.classList.add('line2');
        streetSuite.innerText = `${user.address.street}, ${user.address.suite}`;

        let geo = document.createElement('div');
        geo.classList.add('geo');


        let lat = document.createElement('div');
        lat.classList.add('lat');
        // lat.classList.add('line2');
        lat.innerText = `lat: ${user.address.geo.lat}`;

        let lng = document.createElement('div');
        lng.classList.add('lng');
        lng.innerHTML = `lng: ${user.address.geo.lng}<br>--------<br><br>`;

        let companyName = document.createElement('div');
        companyName.classList.add('company');
        companyName.classList.add('text');
        companyName.classList.add('line3');
        companyName.innerText = `${user.company.name} LLC., B.V.`;

        let catchPhrase = document.createElement('div');
        catchPhrase.classList.add('catchPhrase');
        catchPhrase.classList.add('text');
        catchPhrase.classList.add('line3');
        catchPhrase.innerText = `${user.company.catchPhrase}`;

        let bs = document.createElement('div');
        bs.classList.add('bs');
        bs.classList.add('text');
        bs.classList.add('line3');
        bs.innerHTML = `${user.company.bs}<br>--------<br><br>`;


        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = `-----------------<br>* Inspect POSTS *<br>-----------------`;


        let targetDiv = document.createElement('div');
        targetDiv.classList.add('target');

        let target = document.getElementsByClassName('target');
        let buttonClick = document.getElementsByClassName('btn');
        buttonClick[0].onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('text');
                        postDiv.classList.add('line4');
                        postDiv.innerText = `* ${post.title}`;
                        document.body.appendChild(postDiv)
                    }

                })
        }


        // a.append(button)
        geo.append(lat, lng);
        address.append(zipcodeCity, streetSuite, geo)
        usernameIdDiv.append(id, username)
        div.append(h2Name, usernameIdDiv, phone, email, website, address, companyName, catchPhrase, bs, button)


        document.body.appendChild(div);
    })