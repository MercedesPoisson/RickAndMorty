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
          <nav className={styles.navbar} style={{ position: "fixed", width: "100%" }}>
         <div className={styles.container} style={{ display: "flex" }}>
          <div className={styles.navelements}>
            <ul>
              <li ><NavLink to="/home" >HOME</NavLink></li>
              <li ><NavLink to="/about" >ABOUT</NavLink></li>
              <li ><NavLink to="/favorites" >FAVORITES</NavLink></li>
              <li ><NavLink to="" >RANDOM</NavLink></li>
              <li ><NavLink to="" onClick={handleLogOut} >LOGOUT</NavLink></li>
             </ul>
          </div>
          </div>

          <div className={styles.searchBarContainer} style={{ marginLeft: "auto" }}>
                    <SearchBar onSearch={onSearch} />
                    </div>


        </nav>
        
          {/* <div className={styles.navButtonsContainer}>
          <NavLink to="/home" className={styles.Navboton}>HOME</NavLink>
          <NavLink to="/favorites"  className={styles.Navboton}>FAVORITES</NavLink>
          <NavLink to="/about" className={styles.Navboton}>ABOUT</NavLink>
                     
            <button className={styles.Navboton} onClick={handleLogOut}>LOGOUT</button>
                      
            
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar onSearch={onSearch} />
            
          </div> */}
          
        </nav>
      );
    };
    // {/* <button className={styles.Navboton} onClick={getRandomCharacter}>RANDOM</button> */}
    // {/* <Nav onSearch={onSearch} getRandomCharacter={getRandomCharacter} /> */}

        
      

export default Nav;