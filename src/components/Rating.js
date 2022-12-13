import styles from '../styles/components/Rating.module.css'

function Rating({rating}) {
    const stars = []
    const star = (<i style={{color:"#FF6060"}}className="fa-solid fa-star star" ></i> )
    const emptyStar = (<i style={{color:"#E3E3E3"}} className="fa-solid fa-star star"></i> )
    
    const numRating = Number(rating)
    const numEmptyStar =  5 - numRating
    
    console.log(numEmptyStar)
    for(let c = 0; c < numRating; c ++){
         stars.push(star)
         
    }

    for(let c = 0; c < numEmptyStar; c ++){
        stars.push(emptyStar)
    }
   
    return(
        <div className={styles.rating}>
            {stars.map((e,index) =>
                <span key={index}>{e}</span>
            )} 
        </div>
    )
}

export default Rating