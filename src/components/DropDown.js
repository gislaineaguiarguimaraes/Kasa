//Le hook useState permet de suivre l'état/changement d'un composant
import {useState} from 'react'
import styles from '../styles/components/DropDown.module.css'
import vector from '../images/vector.png'

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
    return(
        <div onClick={handleClick} className={styles.dropDown}>
            <h2>{title}</h2>
            <img src={vector} alt=""/>
            <div style={{display:display}}>
                <p>{text}</p>
            </div>
        </div>
        
    )
}

export default DropDown