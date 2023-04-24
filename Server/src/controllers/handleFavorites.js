require("dotenv").config();

const STATUS_OK = 200;
const STATUS_ERROR = 404;

let myFavorites = [];

function postFav(req, res){
    const {id, name, status, species, gender, origin, image } = req.body;
    
    try {
      if(!id || !name || !status || !species || !gender || !origin || !image){
        return res.status(STATUS_ERROR).json({message: "DATA is missing"})
      }
      const character = {
        id, 
        name, 
        status, 
        species, 
        gender, 
        origin, 
        image
      }
      myFavorites.push(character);
      res.status(STATUS_OK).json(myFavorites);
    } catch(error) {
        res.status(STATUS_ERROR).json({message: error})
    } 
  };
  
  function deleteFav(req, res){
    const { id } = req.params;
    try {
      if(!id){
        return res.status(STATUS_ERROR).json({message: "ID NOT Found"})
      }
      const newFavorite = myFavorites.filter((ch) => ch.id != Number(id));
      myFavorites = newFavorite
      res.status(STATUS_OK).json(myFavorites);
    } catch (error) {
      res.status(STATUS_ERROR).json({message: error})
    }
  };
  
  module.exports = { 
    postFav, 
    deleteFav 
  };