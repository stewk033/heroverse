const fetch = require('node-fetch');
const Character = require('../models/Character');

const heroList = [];

const fetchHero = (params) => {
  fetch(`https://superheroapi.com/api/4708703685857393/${params}`)
    .then(response => response.json())
    .then(function(response) {
      // if (response.biography.publisher === "George Lucas") {
      //   if (response.biography.alignment === 'good') {
          heroList.push({
            // id: response.id,
            name: response.name,
            universe_id: 1,
            alignment_id: 1,
            power_id: response.id
          })
          // index++;
      //   } else {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 1,
      //       alignment_id: 2,
      //       powerstats_id: response.id
      //     })
      //   }
      // }
      // else if (response.biography.publisher === "Marvel Comics") {
      //   if (response.biography.alignment === 'good') {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 2,
      //       alignment_id: 1,
      //       powerstats_id: response.id
      //     })
      //   } else {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 2,
      //       alignment_id: 2,
      //       powerstats_id: response.id
      //     })
      //   }
      // }
      // else if (response.biography.publisher === "Disney") {
      //   if (response.biography.alignment === 'good') {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 3,
      //       alignment_id: 1,
      //       powerstats_id: response.id
      //     })
      //   } else {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 3,
      //       alignment_id: 2,
      //       powerstats_id: response.id
      //     })
      //   }
      // }
      // else if (response.biography.publisher === "DC Comics") {
      //   if (response.biography.alignment === 'good') {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 4,
      //       alignment_id: 1,
      //       powerstats_id: response.id
      //     })
      //   } else {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 4,
      //       alignment_id: 2,
      //       powerstats_id: response.id
      //     })
      //   }
      // }
      // else if (response.biography.publisher === "Dark Horse Comics") {
      //   if (response.biography.alignment === 'good') {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 5,
      //       alignment_id: 1,
      //       powerstats_id: response.id
      //     })
      //   } else {
      //     heroList.push({
      //       id: response.id,
      //       name: response.name,
      //       universe_id: 5,
      //       alignment_id: 2,
      //       powerstats_id: response.id
      //     })
      //   }
      // } 
    })
    return heroList;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function awaitCharacters() {
  for (let i = 1; i < 50; i++) {
    await sleep(500);
    fetchHero(i)
  }
  await sleep(3000);
  const seedCharacters = () => Character.bulkCreate(heroList);
  return seedCharacters();
}

module.exports = awaitCharacters;

