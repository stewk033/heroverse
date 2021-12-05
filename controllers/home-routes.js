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

router.get('/all-characters', (req, res) => {
  Character.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: Universe,
        attributes: ['universe_name']
      },
      {
        model: Alignment,
        attributes: ['alignment_type']
      },
    ]
  })
  .then(dbCharactersData => {
    const characters = dbCharactersData.map(character => character.get({ plain: true }));
    // res.json(dbCharactersData)
    res.render('all-characters', {characters});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/universe', (req, res) => {
  imageList = [];
  imageList.push({src: 'images/star-wars.png', name: 'star-wars', id: 1});
  imageList.push({src: 'images/marvel.png', name: 'marvel', id: 2});
  imageList.push({src: 'images/disney.png', name: 'disney', id: 3});
  imageList.push({src: 'images/dc-comics.png', name: 'dc', id: 4});
  imageList.push({src: 'images/dark-horse.png', name: 'dark-horse', id: 5});
  Universe.findAll({
    attributes: ['id' , 'universe_name']
  })
  .then(dbUniverseData => {
    res.render('universe', {imageList: imageList});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

router.get('/hero', (req, res) => {
  imageList = [];
  imageList.push({src: 'images/star-wars.png', name: 'star-wars', id: 1});
  imageList.push({src: 'images/marvel.png', name: 'marvel', id: 2});
  imageList.push({src: 'images/disney.png', name: 'disney', id: 3});
  imageList.push({src: 'images/dc-comics.png', name: 'dc', id: 4});
  imageList.push({src: 'images/dark-horse.png', name: 'dark-horse', id: 5});
  Universe.findAll({
    attributes: ['id' , 'universe_name']
  })
  .then(dbUniverseData => {
    res.render('universe-hero', {imageList: imageList});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

router.get('/villain', (req, res) => {
  imageList = [];
  imageList.push({src: 'images/star-wars.png', name: 'star-wars', id: 1});
  imageList.push({src: 'images/marvel.png', name: 'marvel', id: 2});
  imageList.push({src: 'images/disney.png', name: 'disney', id: 3});
  imageList.push({src: 'images/dc-comics.png', name: 'dc', id: 4});
  imageList.push({src: 'images/dark-horse.png', name: 'dark-horse', id: 5});
  Universe.findAll({
    attributes: ['id' , 'universe_name']
  })
  .then(dbUniverseData => {
    res.render('universe-villain', {imageList: imageList});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

router.get('/allHeroes', (req, res) => {
  Character.findAll({
    where: {
      alignment_id: 1
    },
  })
  .then (dbCharacterData => {
    const characters = dbCharacterData.map(character => character.get({ plain: true }));
    res.render('characters', {characters});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/allVillains', (req, res) => {
  Character.findAll({
    where: {
      alignment_id: 2
    },
  })
  .then (dbCharacterData => {
    const characters = dbCharacterData.map(character => character.get({ plain: true }));
    res.render('characters', {characters});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/:alignment_id/:universe_id', (req, res) => {
  Character.findAll({
    where: {
      alignment_id: req.params.alignment_id,
      universe_id: req.params.universe_id
    },
  })
  .then (dbCharacterData => {
    const characters = dbCharacterData.map(character => character.get({ plain: true }));
    res.render('characters', {characters});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:universe_id', (req, res) => {
  Character.findAll({
    where: {
      universe_id: req.params.universe_id
    },
  })
  .then (dbCharacterData => {
    const characters = dbCharacterData.map(character => character.get({ plain: true }));
    res.render('characters', {characters});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;