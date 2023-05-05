const { server } = require("./app");
const PORT = 3001;



server.listen(3001, () => {
    console.log(`Server raised in port: http://localhost:${PORT}`);
});