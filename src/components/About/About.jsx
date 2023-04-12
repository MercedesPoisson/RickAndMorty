import styles from './About.module.css'

import imagen from "./Rick&Morty API by Mechi.gif"

const About = () => {
    return(
        
        <div className={styles.VideoContainer}>
          <img src={imagen}/>
        </div>
        // className={styles.Video}

    )
}

export default About;