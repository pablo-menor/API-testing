const url = "https://jsonplaceholder.typicode.com/users";
const button = document.querySelector("#bringUsers");
const users = document.querySelector(".users");
let num_users = 0;
let are_users_shown = false;
button.addEventListener('click', () => {
    if (!are_users_shown){

        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {  
                num_users++;
                const user_div = document.createElement('div');
                user_div.setAttribute('class', user.id);

                const id_button = document.createElement('button');
                id_button.innerHTML = user.id;
                id_button.setAttribute('class', 'id_tag');
                user_div.appendChild(id_button);

                const name = document.createElement('p');
                name.innerHTML = `Name: ${user.name}`;
                user_div.appendChild(name);

                const username = document.createElement('p');
                username.innerHTML = `Username: ${user.username}`;
                user_div.appendChild(username);

                const email = document.createElement('p');
                email.innerHTML = `Email: ${user.email}`;
                user_div.appendChild(email);

                users.appendChild(user_div);

            });

            const id_buttons = document.querySelectorAll('.id_tag'); //list with each users button with d_number
            id_buttons.forEach(id => id.addEventListener('click', () => {
                let id_number = id.innerHTML;
                console.log(`Click sobre: ${id_number}`)
            }))


        })
        are_users_shown = true;
        button.innerHTML = 'Hide Users';
    }

    else location.reload();
 
})



