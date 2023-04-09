import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({onSearch, getRandomCharacter}) => {
    return (
        <nav className={styles.navContainer}>
          <div className={styles.navButtonsContainer}>
            <button className={styles.Navboton}>
              <Link to="/home">LOGOUT</Link>
            </button>
            <button className={styles.Navboton}>
              <Link to="/about">ABOUT</Link>
            </button>
            <button className={styles.Navboton}>
              <Link to="/home">HOME</Link>
            </button>
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar onSearch={onSearch} />
          </div>
          {/* <button className={styles.boton} onClick={getRandomCharacter} >Random</button> */}
        </nav>
      );
    };

export default Nav;