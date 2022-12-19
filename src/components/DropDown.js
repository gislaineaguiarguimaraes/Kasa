//Le hook useState permet de suivre l'état d'un composant
//Le Hook useEffect permet l’exécution d’effets  dans les fonctions composants
//useRef peut être utilisé pour accéder directement à un élément DOM
import {useState, useRef, useEffect} from 'react'
import styles from '../styles/components/DropDown.module.css'
import vector from '../images/arrow.png'

function DropDown({title, props}) {
    //Const pour suivre le changement d'état du display (ouverture et fermeture)
    const [display, setDisplay] = useState('none')
    //Const pour suivre le changement de la hauteur de ma div avec le text caché
    const [heightEl, setHeightEl] = useState();
    //Const qui utilise useRef pour établir un lien avec le dom
    const refHeight = useRef();
    //useEffect pour appliquer un effet sur ma div lorsque la hauteur change
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);
    
    //Fonction onClick pour afficher le display
    function handleClick() {
        if(display === 'none') {
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }
    //Fonction anonyme pour vérifier le type de la props et renvoyer soit une liste soit un texte
    const displayText = () => {
        if(typeof props === "object"){
            return(
                <ul className={styles.containerList}>
                    {props.map((item, index) => (
                        <li key={index} className={styles.list}>{item}</li>
                    )
                    )}
                </ul>
            )
        }else{
            return <p className={styles.text}>{props}</p>
        }
    }
    return(
        <article className={styles.article} >
            <div className={styles.coll_header} onClick={handleClick}>
                <p>{title}</p>
                <img className={display === 'none' ? styles.arrow + ' ' + styles.menu_arrow_down : styles.arrow + ' ' + styles.menu_arrow_open} src={vector} alt="Icone pour ouvrir et fermer le menu"/>
            </div>
            <div ref={refHeight} className={display === 'none' ? styles.coll_content : styles.coll_content + ' ' + styles.animated} style={{display : display ? `${heightEl}` : "0px" }}>
                {displayText()}
            </div>
        </article>
    )  
}

export default DropDown