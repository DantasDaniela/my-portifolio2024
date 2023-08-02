import ButtonB from '../elements/ButtonB'
import styles from './styles/Projects.module.css'
import Card from '../elements/Card' 
import card1 from '../../images/projects/card1.svg'
import card2 from '../../images/projects/card2.svg'

function Projects (){
    return (
        <div className={styles.Projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
            img={card1} 
            title="Aplicação-Nikel" 
            tech="HTML, CSS, JS"
            description="Desenvilvimento de  uma aplicação para controlar finanças."
            repo="https://github.com/DantasDaniela/Nikel" 
            site="https://nikel-dani-growdev.netlify.app"
            />
            <Card
            img={card2} 
            title="Landing-Page-CCXP" 
            tech="HTML, CSS, JS"
            description="Desenvilvimento de uma Langing Page para lançamento de tecnologia."
            repo="https://github.com/DantasDaniela/CCXP-2023-LP" 
            site="https://desafioccxp.netlify.app/"
            />

            </div>
            
    )
        
}

export default Projects