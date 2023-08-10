import styles from './styles/Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Daniela Dantas', 'desenvolvedora Full Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(150);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}

    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1) 

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className={styles.Presentation} id="Presentation">
            <h4>Bem-vindo ao meu Portifólio</h4>
            <h1>Olá, eu sou {text} </h1>
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