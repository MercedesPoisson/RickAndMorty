const http = require('http');
const data = require("./utils/data");

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = request;
    if(url.includes("rickandmorty/character/")){
        const id = url.split("/").at(-1);
        const character = data.find((char) => char.id == id);

        response.end(`Estoy en la ruta con el ID ${id}`);
    }
    
})
.listen(3001, "localhost")