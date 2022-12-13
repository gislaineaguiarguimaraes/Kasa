import styles from '../styles/components/Tag.module.css'

function Tag({tag}){
    return(
        <div className={styles.container_tag}>
            {tag.map((e, index) => (
                <span key={index} className={styles.tag}>{e}</span>
            ))}
        </div>     
    )
}

export default Tag