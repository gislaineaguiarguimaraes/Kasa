import { useParams } from 'react-router-dom';
import DropDown from '../components/DropDown'

function Lodging() {
    document.title="Kasa - Logement"
    let id = useParams();
    return(
        <main>
            <DropDown
            title="Description"
            text=""
            
            />

        </main>
    
    )
}

export default Lodging