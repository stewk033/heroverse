const router = require("express").Router();

const heroRoutes = require("./superhero-routes");

router.use("/hero", heroRoutes);

module.exports = router;