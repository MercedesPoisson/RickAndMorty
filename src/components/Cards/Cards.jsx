import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css";

function Cards({characters}) {
   const filteredCharacters = characters.filter((character) => character.id !== 1)
   return (
   <div className={styles.divCards}>
      {
      filteredCharacters.map(({id, name, status, species, gender, origin, image}) => {
         return ( <Card 
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={() => alert('Emulamos que se cierra la card')}

         />)
      })
      }
   </div>
   );
}
export default Cards;
