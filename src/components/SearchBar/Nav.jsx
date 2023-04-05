import SearchBar from "./SearchBar";
import styles from "./Nav.modules.css";
import { Link, NavLink } from "react-router-dom";

const Nav = ({onSearch, getRandomCharacter}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button className={styles.navboton} ><NavLink to="/about">ABOUT</NavLink></button>
            <button className={styles.navboton}><NavLink to="/home">HOME</NavLink></button>
            {/* <button className={styles.boton} onClick={getRandomCharacter} >Random</button> */}
        </nav>
    )

}

export default Nav;