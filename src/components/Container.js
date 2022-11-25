import styles from '../styles/components/Container.module.css'

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
}

export default Container