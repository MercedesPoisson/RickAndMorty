import styles from "./SearchBar.module.css"
import { useState } from "react";

function SearchBar({onSearch}) {
   
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.container}>
        <input placeholder="Buscar Personaje" className={styles.input} type='search' value={id} onChange={handleChange} />
         <button className={styles.boton} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
      
   );
}

export default SearchBar; 