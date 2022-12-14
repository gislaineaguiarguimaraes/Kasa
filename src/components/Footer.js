//Importer Link pour lier le logo à la page principale
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'
import styles from '../styles/components/Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img src={Logo} alt="Logo Kasa"></img>
            </Link>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer