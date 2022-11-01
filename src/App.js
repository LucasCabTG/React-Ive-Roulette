import React, {useState} from "react";
import './App.css';
import { Amarillo } from "./components/amarillo";
import { Azul } from "./components/Azul";
import { BotonScrollspy } from "./components/BotonScrollspy";
import { Naranja } from "./components/Naranja";
import { Puntuador } from "./components/puntuador";
import { Verde } from "./components/verde";
import { Violeta } from "./components/violeta";
import { Roulette } from './roulette';
import ScrollToTop from "react-scroll-to-top";
import { BotonruletaEnConfig } from "./components/botonruletaenconfig";
import { PuntuadorFinal } from "./components/puntuadorfinal";








function App() {

const [checked, setChecked] = useState(false)
const handleChange = () => {
  setChecked(!checked)
}

const [checked2, setChecked2] = useState(false)
const handleChange2 = () => {
  setChecked2(!checked2)
}

const [checked3, setChecked3] = useState(false)
const handleChange3 = () => {
  setChecked3(!checked3)
}

const [checked4, setChecked4] = useState(false)
const handleChange4 = () => {
  setChecked4(!checked4)
}

const [checked5, setChecked5] = useState(false)
const handleChange5 = () => {
  setChecked5(!checked5)
}

const [checked6, setChecked6] = useState(false)
const handleChange6 = () => {
  setChecked6(!checked6)
}



//////////////  CONTADOR equipo1 ///////////////////////////////////////////////

const [numPuntos, setNumPuntos] = useState(0);

const clickeo = () => {
    setNumPuntos (numPuntos + 1);
}

const reiniciarclickeo = () => {
    setNumPuntos (numPuntos - 1);
}

//////////////  CONTADOR equipo2 ///////////////////////////////////////////////

const [numPuntos2, setNumPuntos2] = useState(0);

const clickeo2 = () => {
    setNumPuntos2 (numPuntos2 + 1);
}

const reiniciarclickeo2 = () => {
    setNumPuntos2 (numPuntos2 - 1);
}

//////////////  CONTADOR equipo3 ///////////////////////////////////////////////

const [numPuntos3, setNumPuntos3] = useState(0);

const clickeo3 = () => {
    setNumPuntos3 (numPuntos3 + 1);
}

const reiniciarclickeo3 = () => {
    setNumPuntos3 (numPuntos3 - 1);
}

//////////////  CONTADOR equipo4 ///////////////////////////////////////////////

const [numPuntos4, setNumPuntos4] = useState(0);

const clickeo4 = () => {
    setNumPuntos4 (numPuntos4 + 1);
}

const reiniciarclickeo4 = () => {
    setNumPuntos4 (numPuntos4 - 1);
}

//////////////  CONTADOR equipo3 ///////////////////////////////////////////////

const [numPuntos5, setNumPuntos5] = useState(0);

const clickeo5 = () => {
    setNumPuntos5 (numPuntos5 + 1);
}

const reiniciarclickeo5 = () => {
    setNumPuntos5 (numPuntos5 - 1);
}




  return (
    <div className="App">
               <ScrollToTop  />
      <div className="menu-inicio" id="menuprincipal">
        <div className="inicio-grid">


        <div className="BotonesScroll">
          <BotonScrollspy />  
        </div>   
        </div>

 
      </div>
      <div className="menuconfiguracion" id="menuconfiguracion">
      <div className="chekers">
          <div className="colectivoCheckers">
          Selecciona qué categorias usar:
          <div className="chekersindividuales">
            <div className="textocheckers">AMEU</div> 
            <div className="containercheckbox">
            <input type="checkbox" onChange={handleChange} />
            </div>
            

          </div>
            <div className="chekersindividuales">
              <div className="textocheckers">Tratamiento del dolor</div> 
              <div className="containercheckbox">
              <input type="checkbox" onChange={handleChange2} />
              </div>
            
          </div>
            <div className="chekersindividuales">
              <div className="textocheckers">Pautas de alarma y cuidados</div> 
              <div className="containercheckbox">
              <input type="checkbox" onChange={handleChange3} />
              </div>
             
              </div>
            <div className="chekersindividuales">
              <div className="textocheckers">
              Anticoncepción postaborto
              </div>
              <div className="containercheckbox">
              <input type="checkbox" onChange={handleChange4} />
              </div>
              
            </div>
            <div className="chekersindividuales">
            <div className="textocheckers">
            Aborto con medicamentos
            </div>
              <div className="containercheckbox">
              <input type="checkbox" onChange={handleChange5} />
              </div>
              
            </div>
            <div className="chekersindividuales">
            <div className="textocheckers">
            Complicaciones y emergencias
            </div>
              <div className="containercheckbox">
              <input type="checkbox" onChange={handleChange6} />
              </div>
              
            </div>
          </div>

          </div> 
          <BotonruletaEnConfig />

      </div>
      <div className="juego-ruleta" id="ruleta">
<section class="container">
    <div className="gridpuntajes">
    <div className="grid2">
  <Puntuador estiloPuntos="equipo1" clickeo={clickeo} reiniciarclickeo={reiniciarclickeo} numPuntos={numPuntos}/>
  <Puntuador  estiloPuntos="equipo2" clickeo={clickeo2} reiniciarclickeo={reiniciarclickeo2} numPuntos={numPuntos2}/>
  <Puntuador  estiloPuntos="equipo3" clickeo={clickeo3} reiniciarclickeo={reiniciarclickeo3} numPuntos={numPuntos3}/>
  <Puntuador  estiloPuntos="equipo4" clickeo={clickeo4} reiniciarclickeo={reiniciarclickeo4} numPuntos={numPuntos4}/>
  <Puntuador  estiloPuntos="equipo5" clickeo={clickeo5} reiniciarclickeo={reiniciarclickeo5} numPuntos={numPuntos5}/>


  </div>
  <div className="gridboton">
  <a href="#findeljuego"><button className="botonfinal">Fin del juego</button></a>

  </div>

    </div>
  <div class="wave"></div>
</section>
    <div className="grid">
      <div className="item item1">
      <Roulette/>
      </div>
      <div className="item item2">
      <Amarillo
      stateAmeu={checked}
      state2={checked2}
      state3={checked3}
      state4={checked4}
      state5={checked5}
      state6={checked6}
      clickeoequiponaranja={clickeo}
      clickeoequiporojo={clickeo2}
      clickeoequipoazul={clickeo3}
      clickeequipoverde={clickeo4}
      clickeequiponegro={clickeo5}

      />
      <Azul
      stateAmeu={checked}
      state2={checked2}
      state3={checked3}
      state4={checked4}
      state5={checked5}
      state6={checked6}
      clickeoequiponaranja={clickeo}
      clickeoequiporojo={clickeo2}
      clickeoequipoazul={clickeo3}
      clickeequipoverde={clickeo4}
      clickeequiponegro={clickeo5}
            />
      </div>
      <div className="item item3">
      <Naranja
      stateAmeu={checked}
      state2={checked2}
      state3={checked3}
      state4={checked4}
      state5={checked5}
      state6={checked6}
      clickeoequiponaranja={clickeo}
      clickeoequiporojo={clickeo2}
      clickeoequipoazul={clickeo3}
      clickeequipoverde={clickeo4}
      clickeequiponegro={clickeo5}
      />
      <Verde 
      stateAmeu={checked}
      state2={checked2}
      state3={checked3}
      state4={checked4}
      state5={checked5}
      state6={checked6}
      clickeoequiponaranja={clickeo}
      clickeoequiporojo={clickeo2}
      clickeoequipoazul={clickeo3}
      clickeequipoverde={clickeo4}
      clickeequiponegro={clickeo5}
      />
      </div>
    </div>
    </div>
    <div className="RondaRapid" id="RondaRapida">

      <div className="botonvioleta">
      <Violeta />
      </div>

    </div>
    <div className="findeljuego" id="findeljuego">
      <div className="titulofindeljuego">PUNTAJES FINALES</div>
    <PuntuadorFinal 
    cajapuntos="equiponaranja"
    puntosequipo={numPuntos}
    nombreequipo="nombreequiponaranja"
    nombredelequipo="Equipo Naranja"/>
    <PuntuadorFinal 
    cajapuntos="equiporojo"
    puntosequipo={numPuntos2}
    nombreequipo="nombreequiporojo"
    nombredelequipo="Equipo Rojo"/>
    <PuntuadorFinal 
    cajapuntos="equipoazul"
    puntosequipo={numPuntos3}
    nombreequipo="nombreequipoazul"
    nombredelequipo="Equipo Azúl"/>
    <PuntuadorFinal 
    cajapuntos="equipoverde"
    puntosequipo={numPuntos4}
    nombreequipo="nombreequipoverde"
    nombredelequipo="Equipo Verde"/>
        <PuntuadorFinal 
    cajapuntos="equiponegro"
    puntosequipo={numPuntos5}
    nombreequipo="nombreequiponegro"
    nombredelequipo="Equipo Negro"/>
        <div className="gracias">¡Gracias por jugar!</div>

    </div>
    </div>
  );
}

export default App;

