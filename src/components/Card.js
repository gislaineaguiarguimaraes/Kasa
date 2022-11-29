//Fonction pour créer chaque card de chaque logement. Cette function sera appelé dans la poge home
import styles from '../styles/components/Card.module.css'
//La fonction recevra les props du fichier Home.js
function Card({id,cover, title}){
    return(
        //Et retournera une liste avec une image et le titre.
        <li key={id} className={styles.lodging_item}>
            <img src={cover} alt={`${title} cover`}/>
            <p>{title}</p>
        </li>
    )
}

export default Card