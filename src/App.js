import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation';
import Projects from './componentes/sections/Projects';
import Skills from './componentes/sections/Skills';
import Footer from './componentes/sections/Footer';
import ButtonB from './componentes/elements/ButtonB';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <ButtonB text="Ver repositório Completo" link='https://github.com/DantasDaniela?tab=repositories'/>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
