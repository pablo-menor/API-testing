const url = "https://jsonplaceholder.typicode.com/users";
const button = document.querySelector(".container");

button.addEventListener('click', () =>{
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
})