import styles from '../styles/components/Rating.module.css'

function Rating(numStars) {
    console.log(numStars.numStars)
    return(
        <div className={styles.rating}>
           <i className="fa-solid fa-star"></i> 
           <i className="fa-solid fa-star"></i> 
           <i className="fa-solid fa-star"></i> 
           <i className="fa-solid fa-star"></i> 
           <i className="fa-solid fa-star"></i> 
        </div>
    )
}

export default Rating