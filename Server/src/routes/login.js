const express = require("express");
const router = express.Router();

const users = require("../utils/users")

router.get("/", users)

module.exports = router;