import Card from '../Card/Card';
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from 'react';
import styles from "./Favorites.module.css";


  
  const Favorites = () => {
    const [ aux, setAux ] = useState(false);
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handlerOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }

    const handlerFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }

    return (
      <div>
        <h1>My Favorites</h1>
        <div>
          <select className={styles.orderselect} onChange={handlerOrder}>
            <option value="order" disabled="disabled">Order By</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select className={styles.filterselect} onChange={handlerFilter}>
            <option value="filter" disabled="disabled">Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        
        {myFavorites.map((character) => {          
          return(
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={character.onClose}
          />
        )
      })
    }
   </div>
  );
  }
    
  export default Favorites;