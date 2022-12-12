import { useParams } from 'react-router-dom';
import DropDown from '../components/DropDown'
import lodgingList from '../datas/lodgingList.json'
import Carousel from '../components/Carousel';
import styles from '../styles/pages/Lodging.module.css'
import Rating from '../components/Rating';


function Lodging() {
    let id = useParams();
    let lodging = lodgingList.find(function(lodging){
        return lodging.id === id.id
    })
    /*let equipments = lodging.equipments.replace(',','\n')
    console.log(lodging)
    console.log(equipments)*/
    document.title="Kasa - Logement"
    return(
        <main>
            <Carousel images={lodging.pictures}/>
            <Rating numStars={lodging.rating}/>
            <div className={styles.content}>
                <DropDown
                title="Description"
                text={lodging.description}
                />
                <DropDown
                title="Equipments"
                text={lodging.equipments}
                />
            </div>
        </main>
    
    )
}

export default Lodging