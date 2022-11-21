//<Link> est utilisé pour définir l'URL et garder une trace de l'historique de navigation. Pour établir un lien vers un chemin interne, nous utiliserons <Link> a la  place de <a href="">.
import {Link} from 'react-router-dom'
import Container from '../container/Container'
import styles from './Navbar.module.css'
import logo from '../../images/logo.svg'
function Navbar() {
    return(
        <Container>
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
        </Container>   
    )
}
export default Navbar