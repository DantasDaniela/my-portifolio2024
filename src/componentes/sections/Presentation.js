import styles from './styles/Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation (){
    return (
        <div className={styles.Presentation} id="Presentation">
            <h4>Bem-vindo ao meu Portifólio</h4>
            <h1>Olá, eu sou a Daniela Dantas!</h1>
            <p>
                Sou alguém que gosta de resolver problemas e trazer soluções <br/>
                para empresas de todos os portes! <br/>
                Como desenvolvedora, busco encontrar soluções <br/>
                que facilitem a vida dos meus clientes e suas marcas.<br/>
                Procuro utilizar ferramentas inovadoras que trazem segurança e <br/>
                confiabialidade para o negócio. <br/>
            </p>
            <ButtonA link='https://github.com/DantasDaniela' text='Conecte-se comigo'/>
            
            
            
        </div>
    )
}

export default Presentation