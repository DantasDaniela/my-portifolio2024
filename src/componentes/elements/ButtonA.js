import styles from './styles/ButtonA.module.css'
function ButtonA({text, link}){
    return(
        <div>
            <a href={link}>
            <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonA