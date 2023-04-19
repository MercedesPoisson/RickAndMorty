const URL = (`https://rickandmortyapi.com/api`)
const axios = require("axios")


const getCharById = (res, id) => {
    axios.get(`${URL}/characters/${id}`)
    .then((response) => {
        const { name, gender, species, origin, image, status } = response.data;
        res.writeHead(200, {"content-Type": "application/json"});
        res.end(JSON.stringify({ name, gender, species, origin, image, status }))
    })

    .catch((error) => {
        res.writeHead(500, { "Content-Type": "text/plain"});
        res.end(error.message);
    })    
}

module.exports = getCharById;