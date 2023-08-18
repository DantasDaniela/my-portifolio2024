import {FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './styles/Footer.module.css'
function Footer (){
    return (
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/danielaaugusto83/'><FaInstagram size={(30)}/></a></li>
                <li><a href='https://github.com/DantasDaniela'><FaGithub size={(30)}/></a></li>
                <li><a href='https://www.linkedin.com/company/login/?https://www.linkedin.com/in/https://www.linkedin.com/in/daniela-dantas-175507255-dantas-175507255/=br'><FaLinkedin size={(30)}/></a></li>
            </ul>
            <p>danydev2023@gmail.com</p>
            <p> Daniela Dantas © 2023</p>
        </div>
    )
}

export default Footer