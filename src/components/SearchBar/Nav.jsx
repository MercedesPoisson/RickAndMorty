import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({onSearch, setAccess}) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
      setAccess(false);
        navigate("/");
    }
    return (
        <nav className={styles.navContainer}>
          <div className={styles.navButtonsContainer}>
          <NavLink to="/home" className={styles.Navboton}>HOME</NavLink>
          <NavLink to="/favorites"  className={styles.Navboton}>FAVORITES</NavLink>
          <NavLink to="/about" className={styles.Navboton}>ABOUT</NavLink>
           
            
            <button className={styles.Navboton} onClick={handleLogOut}>LOGOUT</button>
            
            
            {/* <button className={styles.Navboton} onClick={getRandomCharacter}>RANDOM</button> */}
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar onSearch={onSearch} />
            {/* <Nav onSearch={onSearch} getRandomCharacter={getRandomCharacter} /> */}
          </div>
          
        </nav>
      );
    };

export default Nav;