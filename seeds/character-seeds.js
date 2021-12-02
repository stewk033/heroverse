const Character = require('../models/Character');
const fetch = require('node-fetch');

const heroList = [];

const fetchHero = (params) => {
  fetch(`https://superheroapi.com/api/4708703685857393/${params}`)
    .then(response => response.json())
    .then(function(response) {
      if (response.biography.publisher === "George Lucas") {
        if (response.biography.alignment === 'good') {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1
          })
        } else {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 2
          })
        }
      }
      if (response.biography.publisher === "Marvel Comics") {
        if (response.biography.alignment === 'good') {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1
          })
        } else {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 2
          })
        }
      }
      if (response.biography.publisher === "Disney") {
        if (response.biography.alignment === 'good') {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1
          })
        } else {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 2
          })
        }
      }
      if (response.biography.publisher === "DC Comics") {
        if (response.biography.alignment === 'good') {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1
          })
        } else {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 2
          })
        }
      }
      if (response.biography.publisher === "Dark Horse Comics") {
        if (response.biography.alignment === 'good') {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1
          })
        } else {
          heroList.push({
            id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 2
          })
        }
      } 
    })
    return heroList;
}

let i;

for (i = 1; i < 200; i++) {
  fetchHero(i)
}

console.log(heroList)

const seedCharacters = () => Character.bulkCreate(heroList).then(() => console.log(heroList))


module.exports = seedCharacters;

