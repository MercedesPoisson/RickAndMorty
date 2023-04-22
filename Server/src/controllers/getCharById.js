const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = (req, res) => {
    const { id } = req.params

    axios
    .get(`${URL}/${id}`)
    .then((response) => {
      if (response.data.error) {
        res.status(404).json({ message: "Not found" });
      } else {
        const { id, status, name, species, origin, image, gender } = response.data;
        res.status(200).json({ id, status, name, species, origin, image, gender });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};


module.exports = getCharById;





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