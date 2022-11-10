var listName = document.getElementById("listName");
var listUsername = document.getElementById("listUsername");
var listEmail = document.getElementById("listEmail");

var elenco = [];

window.addEventListener("DOMContentLoaded", init);

function init() {
    printData();
}

function printData() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.json();

    }).then((data) => {
        elenco = data;

        if (elenco.length > 0) {

            elenco.map(function (element) {
                listName.innerHTML += `<li class="list-group-item">${element.name}</li>`
                listUsername.innerHTML += `<li class="list-group-item">${element.username}</li>`
                listEmail.innerHTML += `<li class="list-group-item">${element.email}</li>`
            })

        }
    }).then(() => {
        const odds = document.querySelectorAll("li:nth-of-type(odd)");
        odds.forEach((riga) => {
            riga.classList.add("list-group-item-info");
        });
        const evens = document.querySelectorAll("li:nth-of-type(even)");
        evens.forEach((riga) => {
            riga.classList.add("list-group-item-primary");
        });
    })
    
}