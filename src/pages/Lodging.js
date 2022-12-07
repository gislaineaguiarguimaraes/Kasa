import { useParams } from 'react-router-dom';
import DropDown from '../components/DropDown'
import lodgingList from '../datas/lodgingList.json'
import Carousel from '../components/Carousel';


function Lodging() {
    let id = useParams();
    let lodging = lodgingList.find(function(lodging){
        return lodging.id === id.id
    })
    console.log(lodging)
    document.title="Kasa - Logement"
    return(
        
        <main>
            
            <Carousel images={lodging.pictures}/>
            <DropDown
            title="Description"
            text={lodging.description}
            />
            <DropDown
            title="Equipments"
            text={lodging.equipments}
            />
            

        </main>
    
    )
}

export default Lodging