import styles from "./Card.module.css";
import { Link } from 'react-router-dom';

function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={styles.divCard} style={{ position: 'relative' }}>
         <div className={styles.container}>
         <img className={styles.avatar} src={image} alt='Rick Sanchez' />
      
         <button onClick={() => onClose(id)}>X</button>
      
         <Link to={`/detail/${id}`}>
            <h2 className={styles.primerTitulo}>{name}</h2>
         </Link>
      
         <h3 className={styles.titulos} >{status}</h3>
         <h3 className={styles.titulos}>{species}</h3>
         <h3 className={styles.titulos}>{gender}</h3>
         <h3 className={styles.titulos}>{origin}</h3>
         
      </div>
      </div>
   );
}

export default Card;
