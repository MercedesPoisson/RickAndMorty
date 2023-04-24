const express = require("express");
const server = express();
const logger = require("morgan");

const routes = require("./routes/index");

server.use(express.json());

const urlencoded = express.urlencoded({extended:false});

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "origin- X-Requested-With, Content-Type, Accept"        
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

server.use(logger("dev"));
server.use("/rickandmorty", routes);


module.exports = server;