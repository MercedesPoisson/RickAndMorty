import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css";

function Cards({characters, onClose}) {
   
   return (
   <div className={styles.divCards}>
      {
      characters.map(({id, name, status, species, gender, origin, image}) => {
         return ( <Card 
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={onClose}

         />)
      })
      }
   </div>
   );
}
export default Cards;
