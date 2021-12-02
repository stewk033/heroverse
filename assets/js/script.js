const starWars = document.getElementById('star-wars');
const marvel = document.getElementById('marvel');
const hasbro = document.getElementById('hasbro');
const disney = document.getElementById('disney');
const dcComics = document.getElementById('dc-comics');
const darkHorse = document.getElementById('dark-horse');
const all = document.getElementById('all');

const getHeroInfo = function(heroName) {
    console.log("getHeroInfo function was called");

    fetch("https://superheroapi.com/api/10209423852668692/search/name" + heroName, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "superheroapi.com",
            "x-rapidapi-key": "10209423852668692"
}
    })
    // array logged in the console
//     .then(response => {
//         response.json()
//             .then(function(data) {
//             console.log(data);
//             displayPlayerInfo(data, playerName);
//         });
// })
//     .catch(err => {
//         console.error(err);
//     });

};




starWars.addEventListener('click')
marvel.addEventListener('click')
hasbro.addEventListener('click')
disney.addEventListener('click')
dcComics.addEventListener('click')
darkHorse.addEventListener('click')
all.addEventListener('click')