const express = require("express");
const router = express.Router();

const characters = require("./characters")
const favorites = require("./favorites")

router.use("/character", characters)
router.use("/favorite", favorites)

module.exports = router;
