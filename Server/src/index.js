const http = require('http')
const data = require('./utils/data')

http
.createServer((request,response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes("/rickandmorty/character")){
            const id = request.url.split("/").at(-1)
            const character = data.find(character => character.id === +id)
            if(character){
                return response
                .writeHead(200,{"Content.Type":"application/json"})
                .end(JSON.stringify(character))
            }
    }
})
.listen(3001)