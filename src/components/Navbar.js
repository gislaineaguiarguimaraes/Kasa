//Link est utilisé pour etablir un chemin interne
import {Link} from 'react-router-dom'
import styles from '../styles/components/Navbar.module.css'
import logo from '../images/logo.svg'
function Navbar() {
    return(
        <nav className={styles.navbar}>
            {/*Le logo sera un lien vers la page principale */}
            <Link to="/">
                <img src={logo} alt="Logo Kasa"></img>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Accueil</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
           
    )
}
export default Navbar