import styles from './styles/Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import {FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function Navbar(){
    return (
        <div className={styles.Navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/danielaaugusto83/'><FaInstagram size={(30)}/></a></li>
                <li><a href='https://github.com/DantasDaniela'><FaGithub size={(30)}/></a></li>
                <li><a href='https://www.linkedin.com/company/login/?https://www.linkedin.com/in/https://www.linkedin.com/in/daniela-dantas-175507255-dantas-175507255/=br'><FaLinkedin size={(30)}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar