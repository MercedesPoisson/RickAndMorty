import styles from "./Card.module.css"

export default function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={styles.container}>
      <div className={styles.divCard} style={{ position: 'relative' }}>
         <img className={styles.avatar} src={image} alt='Rick Sanchez' />
         <button onClick={onClose}>X</button>
         <h2 className={styles.primerTitulo}>{name}</h2>
         <h3 className={styles.titulos} style={{ position: 'absolute', top: 0, right: 0 }}>
               {status}
            </h3>
         <h3 className={styles.titulos}>{species}</h3>
         <h3 className={styles.titulos}>{gender}</h3>
         <h3 className={styles.titulos}>{origin}</h3>
         
      </div>
      </div>
   );
}
