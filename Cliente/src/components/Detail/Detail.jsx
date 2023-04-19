import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

const API_KEY = "0a9b7fd55434.d735a9319775188f7884";
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      // axios(`https://rickandmortyapi.com/api/character/${id}`)
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
      <div className={styles.cardContainer} style={{ marginTop: "100px" }}>
            <h1 className={styles.nombre}>{character?.name}</h1>
            <button className={styles.statusButton}>{character?.status}</button>
            <p className={styles.description}>{character?.species}</p>
            <p className={styles.description}>{character?.gender}</p>
            <p className={styles.description}>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name} className={styles.image} />
        
        </div>

    )
}

export default Detail;