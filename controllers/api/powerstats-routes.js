const router = require("express").Router();
const Powerstats = require('../../models/Powerstats');

router.get('/', (req, res) => {
  Powerstats.findAll({
    attributes: ['id', 'intelligence', 'strength', 'speed', 'durability', 'power', 'combat']
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;