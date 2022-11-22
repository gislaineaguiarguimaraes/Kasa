import styles from '../styles/Home.module.css'
import {lodgingList} from '../datas/lodgingList'
import LodgingItem from '../components/LodgingItem'


function Home() {
    return(
        <section >
            <div className={styles.section_lodging_list}>
                <ul className={styles.lodging_list}>
                {lodgingList.map(({ id, cover, title }) => (
                                    <LodgingItem
                                        id={id}
                                        cover={cover}
                                        title={title}
                                    />
                                ))}
                </ul>
            </div>

        </section>
    )
}

export default Home