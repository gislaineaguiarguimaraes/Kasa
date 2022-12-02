import styles from '../styles/components/Background.module.css'

function Background(props) {
    return(
        <>
            <div className={`${styles.divBackground} ${styles[props.customClass]}`}>
                <div className={styles.imgBackgroundBlack}></div>
            </div> 
        </>
            
    )
}

export default Background