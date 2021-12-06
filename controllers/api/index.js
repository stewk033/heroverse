const router = require("express").Router();

const heroRoutes = require("./hero-routes");
const villainRoutes = require('./villain-routes');
const powerRoutes = require('./powerstats-routes')

router.use("/hero", heroRoutes);
router.use("/villain", villainRoutes);
router.use("/power", powerRoutes);

module.exports = router;