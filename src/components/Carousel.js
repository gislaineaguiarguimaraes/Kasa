//Importer useState pour suivre l'état d'un composant
import { useState } from 'react'
import styles from '../styles/components/Carousel.module.css'
//La fonction recevra la liste des images présentes dans le fichier json
const Carousel = ({ images }) => {
    //Déclarer les variables, une pour l'état actuel et autre pour mettre à jour l'état (current, setCurrent)
    const [current, setCurrent] = useState(0)
    const length = images.length
    //Fonction anonyme pour passer à l'image suivante
    const nextSlide = () => {
        //Si la valeur de current est égale à length -1 (Cela signifie que nous sommes dans la dernière image) courant gagne 0 et relance la liste des images, sinon current gagne +1 et passe à la prochaine image
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    //Fonction anonyme pour revenir à l'image précédente
    const prevSlide = () => {
        //Si courant est = 0 (ce qui signifie que nous sommes dans la première image), longueur obtient -1 (longueur -1 est la même chose que la dernière image), sinon courant obtient -1 et retourne une image
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    //Si la props n'est pas un array ou si la liste est vide, retourne null
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
      }
    return (
        <section className={styles.section}>
            <div className={styles.slider}>
                <div className={length === 1 ? styles.none : styles.block}>
                    <button className={`${styles.arrow} ${styles.left_arrow}`} onClick={prevSlide} >
                        <i className="fa-solid fa-chevron-left" alt="arrow back"></i>
                    </button>
                    
                    <button className={`${styles.arrow} ${styles.right_arrow}`} onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right" alt="arrow forward"></i>
                    </button>
                    <p>{`${current + 1}/${length}`}</p>
                </div>
                {images.map((img, index) => {
                    return (
                        <div className={index === current ? styles.slide +' '+ styles.active : styles.slide} key={index}>
                            {index === current && (
                                <img src={img} alt=' ' className={styles.image} />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className={styles.background}/>
        </section>
          
    )
}

export default Carousel