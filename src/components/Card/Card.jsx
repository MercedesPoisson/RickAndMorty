import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
// import font from "..\Fonts\get_schwifty.ttf";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav }) {

   const [ isFav, setIsFav ] = useState(false);

   const handleAddToFavorites = () => {
      addFav({ id, name, status, species, gender, origin, image });
      setIsFav(true);
    };
  
    const handleRemoveFromFavorites = () => {
      removeFav(id);
      setIsFav(false);
    };

    useEffect(() => {
      setIsFav(myFavorites.some((character) => character.id === id));
    }, [myFavorites, id]);

   // const isCharacterFav = myFavorites.some((character) => character.id === id);
     
     
   return (
      <div className={styles.divCard} style={{ position: 'relative' }}>
         <div className={styles.container}>
         <img className={styles.avatar} src={image} alt='Rick Sanchez' />
      
         <button onClick={() => onClose(id)}>X</button>
      
         <Link to={`/detail/${id}`} className={styles.linkSinSubrayado}>
            <h2 className={styles.primerTitulo}>{name}</h2>
         </Link>
      
         <button className={styles.statusButton} >{status}</button>
         {/* <h3 className={styles.titulos}>{species}</h3>
         <h3 className={styles.titulos}>{gender}</h3>
         <h3 className={styles.titulos}>{origin}</h3> */}

{
            isFav ? (
               <button onClick={handleRemoveFromFavorites}>❤️</button>
            ) : (
               <button onClick={handleAddToFavorites}>🤍</button>
            )
         }
                   
      </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
 };
 
 const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {dispatch(addFav(character))},
     removeFav: (id) => {dispatch(removeFav(id))}
   }
   
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
