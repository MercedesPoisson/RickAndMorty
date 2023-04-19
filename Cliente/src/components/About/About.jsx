import styles from './About.module.css'

import imagen from "./Rick&Morty API by Mechi.gif"

const About = () => {
    return(
        
        <div className={styles.VideoContainer} style={{ marginTop: "100px" }}>
          <img src={imagen} alt="Rick&Morty by Mechi"/>
        </div>
       

    )
}

export default About;