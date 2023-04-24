require("dotenv").config()

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;


function login(req, res) {
    const { email, password } = req.query;
    if(!password|| !email){
      return res.status(500).json({message: "Password and Email Required"})
    }
    if(password === DB_PASSWORD && email === DB_EMAIL){
      res.status(STATUS_OK).json({access: true})
    } else {
      res.status(STATUS_ERROR).json({access: false})
    }
    
};

module.exports = login;
