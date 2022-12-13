//Le hook useState permet de suivre l'état/changement d'un composant
import {useState} from 'react'
import styles from '../styles/components/DropDown.module.css'
import vector from '../images/vector.png'

function DropDown({title, props}) {
    //Fonction pour suivre le changement d'état du menu déroulant (ouverture et fermeture)
    const [display, setDisplay] = useState('none')
    
    function handleClick() {
        if(display === 'none') {
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }

    const displayText = () => {
        if(typeof props === "object"){
            return(
                <ul>
                    {props.map((item, index) => (
                        <li key={index} className={styles.list}>{item}</li>
                    )
                    )}
                </ul>
            )
        }else{
            return <p>{props}</p>
        }
    }
    
    
    return(
        <article className={styles.article} >
            <div className={styles.coll_header} onClick={handleClick}>
                <p>{title}</p>
                <img className={display === 'none' ? styles.arrow + ' ' + styles.menu_arrow_down : styles.arrow + ' ' + styles.menu_arrow_open} src={vector} alt="Icone pour ouvrir et fermer le menu"/>
            </div>
            <div className={display === 'none' ? styles.coll_content : styles.coll_content + ' ' + styles.animated} style={{display:display}}>
                {displayText()}
            </div>
        </article>
    )  
}

export default DropDown