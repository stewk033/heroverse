const router = require("express").Router();
const fetch = require('node-fetch');

const fetchHeroes = async (params) => {
  const fetchHero = fetch(`https://superheroapi.com/api/4708703685857393/${params}`)
    .then(response => response.json())
    .then(data => {
      return data
    });
  return fetchHero;
}

// router.get('/', async (req, res) => {
//   const hero = await fetchHeroes();
//   res.json(hero)
// });

router.get('/:id', async (req, res) => {
  const hero = await fetchHeroes(req.params.id);
  res.json(hero)
});

router.get('/', async (req, res) => {
  const heroList = []
  for (let i = 1; i < 731; i++) {
    const hero = await fetchHeroes(i);
    if (hero.biography.publisher === "DC Comics") {
      heroList.push(hero.name);
    }
  }
  res.json(heroList);
});

module.exports = router;