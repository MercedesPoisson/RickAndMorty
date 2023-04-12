import styles from './About.module.css'
import video from "./Rick&Morty API by Mechi.mp4"

const About = () => {
    return(
        
        <div className={styles.VideoContainer}>
        <video autoPlay loop muted >
        <source src={video} type='video/mp4' />
        </video>
                
        </div>
        // className={styles.Video}

    )
}

export default About;