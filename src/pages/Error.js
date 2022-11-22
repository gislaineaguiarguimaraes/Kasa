import { Link } from 'react-router-dom'
import styles from '../styles/Error.module.css'

function Error() {
    return(
        <section className={styles.error}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/"><p>Retourner sur la page d’accueil</p></Link>
        </section>
    )
}

export default Error