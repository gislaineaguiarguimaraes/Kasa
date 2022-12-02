import styles from '../styles/components/Container.module.css'
import Footer from '../components/Footer'
import Navbar from './Navbar'

function Container(props) {
    return (
        <div className={styles.body}>
            <Navbar/>
            <div className={`${styles.container} ${styles[props.customClass]}`}>
                {props.children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )}

export default Container