import styles from '../styles/components/Container.module.css'
import Footer from '../components/Footer'
import Navbar from './Navbar'
//Container qui va contenir le contenu principal
function Container(props) {
    return (
        <div className={styles.body}>
            <Navbar/>
            <div className={styles.container}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )}

export default Container