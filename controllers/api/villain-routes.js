const router = require("express").Router();
const Character = require('../../models/Character');
const Universe = require('../../models/Universe');

router.get('/', async (req, res) => {
  Character.findAll({
    where: {
      alignment_id: 2
    }
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', async (req, res) => {
  Character.findOne({
    where: {
      id: req.params.id
    }
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/universe/:universe_id', async (req, res) => {
  Character.findAll({
    where: {
      universe_id: req.params.universe_id
    }
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;