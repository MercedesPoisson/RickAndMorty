import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
    const {detailId} = useParams();
    const [data, setCharacter] = useState({});

    useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({}); 
 }, [detailId]);

    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.status}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <p>{data.gender}</p>
            <p>{data.origin.name}</p>
            
        </div>

    )
}

export default Detail;