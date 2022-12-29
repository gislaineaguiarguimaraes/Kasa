import styles from '../styles/components/Rating.module.css'

//Fonction qui recevra en paramètre le nombre d'étoiles que possède chaque logement
function Rating({rating}) {
    const stars = []
    const star = (<i style={{color:"#FF6060"}}className="fa-solid fa-star star" ></i> )
    const emptyStar = (<i style={{color:"#E3E3E3"}} className="fa-solid fa-star star"></i> )
    
    const numRating = Number(rating)
    const numEmptyStar =  5 - numRating
    //Insère dans l'array stars le nombre correspondantes d'étoiles colorées 
    for(let c = 0; c < numRating; c ++){
         stars.push(star)
         
    }
    //insère le nombre d'étoiles grises restantes pour compléter 5
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