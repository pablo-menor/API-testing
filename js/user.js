const url = new URLSearchParams(window.location.search);
const id = url.get('id');
const url_single_user  = `https://jsonplaceholder.typicode.com/users/${id}`;
const users = document.querySelector(".users");
fetch(url_single_user)
    .then(response => response.json())
    .then(user => {

        let user_div = document.createElement('div');
        user_div.setAttribute('class', user.id);

        const id_number = document.createElement('p');
        id_number.innerHTML = `<strong>ID</strong>: ${user.id}`;
        user_div.appendChild(id_number);

        const name = document.createElement('p');
        name.innerHTML = `<strong>Name</strong>: ${user.name}`;
        user_div.appendChild(name);

        const username = document.createElement('p');
        username.innerHTML = `<strong>Username</strong>: ${user.username}`;
        user_div.appendChild(username);

        const email = document.createElement('p');
        email.innerHTML = `<strong>Email</strong>: ${user.email}`;
        user_div.appendChild(email);

        const city = document.createElement('p');
        city.innerHTML = `<strong>City</strong>: ${user.address.city}`;
        user_div.appendChild(city);

        const company = document.createElement('p');
        company.innerHTML = `<strong>Company</strong>: ${user.company.name}`;
        user_div.appendChild(company);


        users.appendChild(user_div);
    })

    document.querySelector('#return').addEventListener('click', function(){
        window.location.href = '../index.html';
    })