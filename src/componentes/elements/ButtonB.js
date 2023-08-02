import styles from './styles/ButtonB.module.css'
function ButtonB({text, link}){
    return(
        <div>
            <a href={link}>
                <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonB