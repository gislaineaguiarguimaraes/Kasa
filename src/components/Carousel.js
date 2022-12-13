//Importer useState pour suivre l'état d'un composant
import { useState } from 'react'
import styles from '../styles/components/Carousel.module.css'

const Carousel = ({ images }) => {
    //Déclarer les variables, une pour l'état actuel et autre pour mettre à jour l'état (current, setCurrent)
    const [current, setCurrent] = useState(0)
    const length = images.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    //Si la props n'est pas un array ou si la liste est vide, retourne null
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
      }
    return (
        <section className={styles.section}>
            <div className={styles.slider}>
                <button className={`${styles.arrow} ${styles.left_arrow}`} onClick={prevSlide} >
                    <i className="fa-solid fa-chevron-left" alt="arrow back"></i>
                </button>
                
                <button className={`${styles.arrow} ${styles.right_arrow}`} onClick={nextSlide}>
                    <i className="fa-solid fa-chevron-right" alt="arrow forward"></i>
                </button>
                <p>{`${current + 1}/${length}`}</p>
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