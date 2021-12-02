const router = require("express").Router();

const heroRoutes = require("./hero-routes");
const villainRoutes = require('./villain-routes')

router.use("/hero", heroRoutes);
router.use("/villain", villainRoutes);

module.exports = router;