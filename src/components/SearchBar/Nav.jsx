import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, getRandomCharacter}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button className={styles.Navboton}><NavLink to="/home">LOGOUT</NavLink></button>
            <button className={styles.Navboton}><NavLink to="/about">ABOUT</NavLink></button>
            <button className={styles.Navboton}><NavLink to="/home">HOME</NavLink></button>
            {/* <button className={styles.boton} onClick={getRandomCharacter} >Random</button> */}
        </nav>
    )

}

export default Nav;