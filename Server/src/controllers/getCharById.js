const axios = require("axios");
require("dotenv").config()

const URL = process.env.API_URL;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

function getCharById(req, res) {
    const { id } = req.params

    axios.get(`${URL}${id}`)
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
    .catch(error => res.status(500).send(error.message))
    }
  


  module.exports = {
    getCharById
  }





// const axios = require("axios")

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({ name, gender, species, origin, image, status }) => {      
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }   

//         return res
//                 .writeHead(200, {"content-Type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res
//                 .writeHead(500, { "Content-Type": "text/plain"})
//                 .end(error.message);
//     })    
// }

// module.exports = {
//     getCharById
// };