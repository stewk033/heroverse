// const fetch = require('node-fetch');
// const Powerstats = require('../models/Powerstats');

// const powerstatsList = [];

// const fetchStats = (params) => {
//   fetch(`https://superheroapi.com/api/4708703685857393/${params}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.powerstats.intelligence === "null") {
//         return null
//       } else {
//         powerstatsList.push({
//           id: data.id,
//           intelligence: data.powerstats.intelligence,
//           strength: data.powerstats.strength,
//           speed: data.powerstats.speed,
//           durability: data.powerstats.durability,
//           power: data.powerstats.power,
//           combat: data.powerstats.combat
//         })
//       }
//     })
//     return powerstatsList;
// }

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function awaitStats() {
//   for (let i = 1; i < 100; i++) {
//     await sleep(100);
//     fetchStats(i)
//   }
//   // await sleep(30000);
//   const seedStats = () => Powerstats.bulkCreate(powerstatsList);
//   return seedStats();
// }

// module.exports = awaitStats;
