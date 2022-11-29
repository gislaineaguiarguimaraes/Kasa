import styles from '../styles/pages/Home.module.css'
import {lodgingList} from '../datas/lodgingList'
import Card from '../components/Card'
import Background from '../components/Background'
import Container from '../components/Container'


function Home() {
    return(
        <Container customClass="column">
            <Background customClass="imgBackgroundHome"/>
            <section className={styles.section_lodging}>
                <ul className={styles.lodging_list}>
                {lodgingList.map(({ id, cover, title }) => (
                                    <Card
                                        id={id}
                                        cover={cover}
                                        title={title}
                                    />
                                ))}
                </ul>
            </section>
        </Container>
    )
}

export default Home