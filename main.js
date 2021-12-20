const url = "https://api.spacexdata.com/v3/capsules?pretty=true";
let container = document.getElementById('container');
let cardContainer = document.querySelector('.card-container')
let card = document.querySelector('.card');

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        console.log(element.type)
        const p = document.createElement('p')
        p.innerHTML = `Rocket: ${element.type}. ${element.capsule_serial}. <hr>
        Flight: ${element.missions[0].name} , ${element.missions[0].flight} <br>
        Launch: ${element.original_launch}.
        Landings: ${element.landings}. Status: ${element.status}.
        `
        cardContainer.appendChild(p).classList.add('card')
    });    
    console.log(data)
})
.catch(err => console.log(err))
 
