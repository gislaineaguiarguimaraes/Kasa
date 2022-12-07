import styles from '../styles/components/Carousel.module.css'

function Carousel({images, props}){
    
   
    return (
        <div className={styles.carousel_container}>
            <div className={styles.carousel}>
                {images.map((img, index) => (
                    <div className={styles.slide} key={index}>
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
        </div>
        
    )
}

export default Carousel