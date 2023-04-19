const http = require('http');
const data = require("./utils/data");

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = request;
    if(url.includes("rickandmorty/character/")){
        const id = url.split("/").at(-1);
        const character = data.find((char) => char.id == id);
        
        if(character) {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(character));
    } else {
        response.writeHead(404, {"Content-Type": "application/json"});
        return response.end(JSON.stringify({error: "Character not found"}));
      }
    }
    
})
.listen(3001, "localhost")