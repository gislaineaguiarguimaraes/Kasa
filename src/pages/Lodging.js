import { useParams } from 'react-router-dom';
import DropDown from '../components/DropDown'
import lodgingList from '../datas/lodgingList.json'
import Carousel from '../components/Carousel';
import styles from '../styles/pages/Lodging.module.css'
import Rating from '../components/Rating';
import Tag from '../components/Tag';



function Lodging() {
    let id = useParams();
    let lodging = lodgingList.find(function(lodging){
        return lodging.id === id.id
    })
    
    document.title="Kasa - Logement"
    return(
        <main>
            <Carousel images={lodging.pictures}/>
            <div className= {styles.contentInfo}>
                <div className={styles.info}>
                    <h1>{lodging.title}</h1>
                    <h2>{lodging.location}</h2>
                    <Tag tag={lodging.tags}/>
                </div>
                <div className={styles.content_host}>
                    <div className={styles.host}>
                        <span>{lodging.host.name}</span>
                        <img src={lodging.host.picture} alt=' '/>
                    </div>
                    <Rating rating={lodging.rating}/>
                </div>
            </div>
            <div className={styles.contentDropDown}>
                <DropDown
                title="Description"
                props={lodging.description}
                />
                <DropDown
                title="Equipments"
                props={lodging.equipments}
                />
            </div>
        </main>
    
    )
}

export default Lodging