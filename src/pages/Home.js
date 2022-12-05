import styles from '../styles/pages/Home.module.css'
import lodgingList from '../datas/lodgingList'
import Card from '../components/Card'
import Background from '../components/Background'


function Home() {
    document.title="Kasa - Page d'accueil"
    return(
        <main>
            <Background customClass="imgBackgroundHome"/>
            <section className={styles.section_lodging}>
                <ul className={styles.lodging_list}>
                    {lodgingList.map((lodging) => (
                        <Card
                            key={lodging.id}
                            lodging={lodging}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Home