const Universe = require('../models/Universe');

const universeData = [
  {
    universe_name: 'Star Wars',
  },
  {
    universe_name: 'Marvel',
  },
  {
    universe_name: 'Disney',
  },
  {
    universe_name: 'DC',
  },
  {
    universe_name: 'Dark Horse',
  },
];

const seedUniverses = () => Universe.bulkCreate(universeData);

module.exports = seedUniverses;