import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    axios(`https://rickandmortyapi.com/api/character/${id}`)
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