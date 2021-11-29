const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('hero-villain');
});

router.get('/universes', (req, res) => {
  res.render('universes');
});

router.get('/all-universes', (req, res) => {
  res.render('all-universes');
});

module.exports = router;