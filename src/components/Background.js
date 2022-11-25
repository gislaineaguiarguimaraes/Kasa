import styles from '../styles/components/Background.module.css'

function Background(props) {
    return(
        <div className={`${styles.divBackground} ${styles[props.customClass]}`}/>
    )
}

export default Background