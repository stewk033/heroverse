const Character = require('./Character');
const Universe = require('./Universe');
const Alignment = require('./Alignment');
const Powerstats = require('./Powerstats');


Universe.hasMany(Character, {
  foreignKey: 'universe_id'
});

Character.belongsTo(Universe, {
  foreignKey: 'universe_id'
});

Alignment.hasMany(Character, {
  foreignKey: 'alignment_id'
});

Character.belongsTo(Alignment, {
  foreignKey: 'alignment_id'
});

Character.belongsTo(Powerstats, {
  foreignKey: 'powerstats_id'
});

module.exports = {Character, Universe, Alignment, Powerstats};