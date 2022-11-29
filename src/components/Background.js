import styles from '../styles/components/Background.module.css'
import Container from './Container'


function Background(props) {
    return(
        <Container>
            <div className={`${styles.divBackground} ${styles[props.customClass]}`}>
                <div className={styles.imgBackgroundBlack}></div>
            </div> 
        </Container>
            
    )
}

export default Background