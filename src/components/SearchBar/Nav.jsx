import SearchBar from "./SearchBar";
import styles from "./Nav.modules.css";
import { Link, NavLink } from "react-router-dom";

const Nav = ({onSearch, getRandomCharacter}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button className={styles.navboton} ><NavLink to="/about">About</NavLink></button>
            <button className={styles.navboton}><NavLink to="/home">Home</NavLink></button>
            {/* <button className={styles.boton} onClick={getRandomCharacter} >Random</button> */}
        </nav>
    )

}

export default Nav;