import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "0a9b7fd55434.d735a9319775188f7884";
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(response => response.data)
    .then((data) => {
       if (data.name) {
          setCharacter(data);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({}); 
 }, [id]); // array de dependencia tiene que estar si o si

    return(
        <div>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name} />
        
        </div>

    )
}

export default Detail;