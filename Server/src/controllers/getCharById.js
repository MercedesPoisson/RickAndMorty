const axios = require("axios");
require("dotenv").config()

const URL = process.env.API_URL;


const STATUS_OK = 200;
const STATUS_ERROR = 404;

function getCharById(req, res) {
    const { id } = req.params
    try {
    axios.get(`${URL}${id}`).then(({data}) => {
      if(data){
      const character = { 
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        gender: data.gender
      };
      res.status(STATUS_OK).json(character)
      } else {
        res.status(STATUS_ERROR).json({message: "Character not Found"})
      }   
    });
    } catch (error) {
      return res.status(500).json({message: "error"})
    }
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