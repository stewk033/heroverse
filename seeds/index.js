const seedCharacters = require('./character-seeds');
const seedUniverses = require('./universe-seeds');
const seedAlignments = require('./alignment-seeds');
// const seedStats = require('./powerstats-seeds');

const sequelize = require('../assets/config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUniverses();
  console.log('\n----- UNIVERSES SEEDED -----\n');
  await seedAlignments();
  console.log('\n----- ALIGNMENTS SEEDED -----\n');
  // await seedStats();
  // console.log('\n----- POWERSTATS SEEDED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
