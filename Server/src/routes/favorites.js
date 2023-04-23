const express = require("express");
const router = express.Router();

const {getAdd} = require("../controllers/handleFavorites")

router.get("/:id", getAdd)

const axios = require("axios");
require("dotenv").config()

const URL = process.env.API_URL;
const STATUS_OK = 200;
const STATUS_ERROR = 404;

function getAdd (req, res) {
    
  }


module.exports = getAdd;