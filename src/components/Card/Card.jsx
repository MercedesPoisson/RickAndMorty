import styles from "./Card.module.css"

export default function Card({name, status, species, gender, origin, image, onclose }) {
   return (
      <div className={styles.container}>
      <div className={styles.divCard}>
         <img className={styles.avatar} src={image} alt='Rick Sanchez' />
         <button onClick={onclose}>X</button>
         <h2 className={styles.primerTitulo}>{name}</h2>
         <h3 className={styles.titulos}>{status}</h3>
         <h3 className={styles.titulos}>{species}</h3>
         <h3 className={styles.titulos}>{gender}</h3>
         <h3 className={styles.titulos}>{origin}</h3>
         
      </div>
      </div>
   );
}
