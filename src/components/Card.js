//Fonction pour créer les cards des logements. Cette function sera appelé dans la poge home
import styles from '../styles/components/Card.module.css'
import { Link } from 'react-router-dom'
//La fonction recevra les props du fichier Home.js
function Card({lodging}){
    return(
        //Et retournera une liste avec une image et le titre.
        <li  className={styles.lodging_item} >
            <Link to={`/lodging/${lodging.id}`} className={styles.lodging_link} >
                <img src={lodging.cover} alt={`${lodging.title} cover`}/>
                <p>{lodging.title}</p>
            </Link>
        </li>
    )
}

export default Card