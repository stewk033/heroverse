const router = require("express").Router();

const heroRoutes = require("./hero-routes");
const villainRoutes = require('./villain-routes')

router.use("/", heroRoutes);
router.use("/", villainRoutes);

module.exports = router;