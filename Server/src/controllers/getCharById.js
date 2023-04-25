const axios = require("axios");
require("dotenv").config()

const URL = process.env.API_URL;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

async function getCharById(req, res) {
  try {
    const { id } = req.params

    await axios.get(`${URL}${id}`)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
      if(name){
      const character = { 
        id,
        status,
        name,
        species,
        origin,
        image,
        gender
       };
      return res.status(STATUS_OK).json(character)
      }; 
      return res.status(STATUS_ERROR).send("Character not Found")  
    })
   
  } catch (error) {
    res.status(500).send(error.message)
  }
    
    }
  
  module.exports = {
    getCharById
  }
