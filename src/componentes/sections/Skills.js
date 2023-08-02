import styles from './styles/Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import css from '../../images/skills/css.svg'
import html from '../../images/skills/html.svg'
import react from '../../images/skills/react.svg'
import typescript from '../../images/skills/typescript.svg'

function Skills (){
    return (
        <div className={styles.Skills} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos</p>
            <div>
                <img src={javascript}/>
                <img src={css}/>
                <img src={html}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}

export default Skills