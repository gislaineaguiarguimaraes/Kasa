//Le hook useState permet de suivre l'état/changement d'un composant
import {useState} from 'react'
import styles from '../styles/components/DropDown.module.css'
import vector from '../images/vector.png'
import Container from './Container'

function DropDown({title, text}) {
    //Fonction pour suivre le changement d'état du menu déroulant (ouverture et fermeture)
    const [display, setDisplay] = useState('none')
    
    function handleClick() {
        if(display === 'none') {
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }
    function Arrow(){
        if(display === 'none'){
            return(<img className={`${styles.menu_arrow}${styles.menu_arrow_down}`} src={vector} alt="Icone pour ouvrir et fermer le menu"/>)
        }else{
            return(<img className={`${styles.menu_arrow} ${styles.menu_arrow_open}`} src={vector} alt="Icone pour ouvrir et fermer le menu"/>)
        }
        
    }
    return(
        <Container customClass="column" >
            <div className={styles.coll_header} onClick={handleClick}>
                <h3>{title}</h3>
                <Arrow/>
            </div>
            <div className={styles.coll_content} style={{display:display}}>
                <p className={styles.coll_item}>{text}</p>
            </div>

        </Container>
    )  
}

export default DropDown