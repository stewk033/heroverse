const router = require('express').Router();
const {Character, Universe, Alignment} = require('../models');

router.get('/', (req, res) => {
  Alignment.findAll({
    attributes: ['id', 'alignment_type']
  })
  .then(dbAlignmentData => {
    const alignments = dbAlignmentData.map(alignment => alignment.get({ plain: true }));
    res.render('hero-villain', {alignments});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:universe_id', (req, res) => {
  Universe.findAll({
    attributes: ['id' , 'universe_name']
  })
  .then(dbUniverseData => {
    const universes = dbUniverseData.map(universe => universe.get({ plain: true }));
    res.render('hero-villain', {universes});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;