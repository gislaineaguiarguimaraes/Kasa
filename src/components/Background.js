import styles from '../styles/Background.module.css'

function Background(props) {
    return(
        <div className={`${styles.divBackground} ${styles[props.customClass]}`}/>
    )
}

export default Background