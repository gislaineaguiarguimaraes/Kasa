import { useState } from 'react'
import styles from '../styles/components/Carousel.module.css'

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0)
    const length = images.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
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
        
        /*<section className={styles.carousel_container}>
            <div className={styles.carousel}>
                {images.map((img, index) => (
                    <div className={`${styles.slide} ${index === current ? styles.slider_actve : styles.slider}`} key={index}>
                        <img src={img} alt=" "/>
                    </div> 
                ))}
                
            </div> 
            <button className={`${styles.arrow} ${styles.left_arrow}`}>
                <i className="fa-solid fa-chevron-left" alt="arrow back"></i>
            </button>
            
            <button className={`${styles.arrow} ${styles.right_arrow}`}>
                <i className="fa-solid fa-chevron-right" alt="arrow forward"></i>
            </button>
        </section>*/
        
    )
}

export default Carousel