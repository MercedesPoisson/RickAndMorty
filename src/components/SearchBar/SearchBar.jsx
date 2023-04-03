import styles from "./SearchBar.module.css"

function SearchBar({onSearch}) {
   return (
      <div>
        <input placeholder="Buscar Personaje" className={styles.input}type='search' />
         <button className={styles.boton} onClick={onSearch}>BUSCAR</button>
      </div>
      
   );
}

export default SearchBar;