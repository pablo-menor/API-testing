const url = "https://jsonplaceholder.typicode.com/users";
const button = document.querySelector("#bringUsers");
const users = document.querySelector(".users");

button.addEventListener('click', () =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const user_div = document.createElement('div');
            user_div.setAttribute('class', user.id);
    
            const name = document.createElement('p');
            name.innerHTML = user.name;
            user_div.appendChild(name);
    
            const username = document.createElement('p');
            username.innerHTML = user.username;
            user_div.appendChild(username);
    
            const mail = document.createElement('p');
            mail.innerHTML = user.mail;
            user_div.appendChild(mail);
    
            users.appendChild(user_div);
            
        });
   
    })
})