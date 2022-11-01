import React, {useState} from "react";
import styled from 'styled-components';
import ModalAzul from './ModalAzul';
import '../styles/botonazul.css'
import { FaPrayingHands } from "react-icons/fa";
import sonidocarta from "../sounds/sonidocarta.mp3"


const Arrayazul = [
  {
    pregunta: "Contención emocional",
    condicion: "",
    categoria:  2
},
{
    pregunta: "Anestesia paracervical",
    condicion: "",
    categoria:  2
},
{
    pregunta: "Sangrado abundante o persistente",
    condicion: "",
    categoria:  3
},
{
    pregunta: "No usar tampones",
    condicion: "",
    categoria:  3
},
{
  pregunta: "Dolor intenso",
  condicion: "",
  categoria:  3
},
{
pregunta: "Estar acompañada",
condicion: "",
categoria:  3
},
{
    pregunta: "DIU colocado",
    condicion: "",
    categoria:  4
},
{
    pregunta: "Implante subdérmico",
    condicion: "",
    categoria:  4
},
{
    pregunta: "Anticoncepción inmediata posevento obstétrico (AIPEO)",
    condicion: "",
    categoria:  4
},
{
  pregunta: "Métodos de larga duración",
  condicion: "",
  categoria:  4
},
{
pregunta: "Criterios de elegibilidad de la OMS",
condicion: "",
categoria:  4
},
{
pregunta: "Anticoncepción de emergencia",
condicion: "",
categoria:  4
},
{
    pregunta: "Consentimiento informado",
    condicion: "",
    categoria:  1
},
{
    pregunta: "Lidocaína ",
    condicion: "",
    categoria:  1
},
{
    pregunta: "Anillo “0”",
    condicion: "",
    categoria:  1
},
{
    pregunta: "Cánulas ",
    condicion: "",
    categoria:  1
},
{
  pregunta: "Autoclave ",
  condicion: "",
  categoria:  1
},
{
pregunta: "Antibióticos dos horas antes",
condicion: "",
categoria:  1
},
{
pregunta: "Analgésicos una hora antes ",
condicion: "",
categoria:  1
},
{
pregunta: "No usar estufa de calor seco ",
condicion: "",
categoria:  1
},
{
    pregunta: "Combipack",
    condicion: "",
    categoria:  5
},
{
    pregunta: "Dolor cólico",
    condicion: "",
    categoria:  5
},
{
  pregunta: "Ofrecer analgésicos siempre",
  condicion: "",
  categoria:  5
},
{
pregunta: "Consultar si hay poco sangrado",
condicion: "",
categoria:  5
},
{
pregunta: "Explicar signos de alarma",
condicion: "",
categoria:  5
},
{
    pregunta: "“En la emergencia, primero pedir ayuda”",
    condicion: "",
    categoria:  6
},
{
    pregunta: "2 vías endovenosas de grueso calibre",
    condicion: "",
    categoria:  6
},
{
  pregunta: "Caja de emergencia",
  condicion: "",
  categoria:  6
},
{
pregunta: "Comunicación entre equipos",
condicion: "",
categoria:  6
},
{
pregunta: "Siempre preparadas para la emergencia",
condicion: "",
categoria:  6
},
{
pregunta: "Sistema de traslados",
condicion: "",
categoria:  6
}
];

export function Azul({stateAmeu, state2, state3, state4, state5, state6, clickeoequiponaranja, clickeoequiporojo, clickeoequipoazul, clickeequipoverde, clickeequiponegro}) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false)
    const [index, setIndex] = useState(0);

  //CONDICIONES

  let categoriaAmeu = Arrayazul[index].categoria


  if(stateAmeu === true){
    if (categoriaAmeu === 1){
      changeAzul()
    }
  }

  if(state2 === true){
    if (categoriaAmeu === 2){
      changeAzul()
    }
  }

  if(state3 === true){
    if (categoriaAmeu === 3){
      changeAzul()
    }
  }

  if(state4 === true){
    if (categoriaAmeu === 4){
      changeAzul()
    }
  }

  if(state5 === true){
    if (categoriaAmeu === 5){
      changeAzul()
    }
  }

  if(state6 === true){
    if (categoriaAmeu === 6){
      changeAzul()
    }
  }


      // ALGORITMO TARJETAS AZULES
  function todosazul(){
    changeAzul();
    abrirmodal1();
  }

  function changeAzul() {
    let newIndex = Math.floor(Math.random() * (Arrayazul.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
    setIndex(newIndex);
  }
  function abrirmodal1(){
    cambiarEstadoModal1(!estadoModal1)
  }

  const audio = new Audio(sonidocarta)


  function abrirysonar(){
    todosazul();
    audio.play()
  }

    return (
        <div>
        <button className="btnazul" onClick={abrirysonar}> <p>DÍGALO CON MÍMICA</p>  <FaPrayingHands/> </button>

        <ModalAzul
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Dígalo con mímica o dibuje"
        
      >
        <Contenido>
          <h1>{Arrayazul[index].pregunta}</h1>

          <div className="botonespuntos">
              <button className="equiponaranja" onClick={clickeoequiponaranja}>+1</button>
              <button className="equiporojo" onClick={clickeoequiporojo}>+1</button>
              <button className="equipoazul" onClick={clickeoequipoazul}>+1</button>
              <button className="equipoverde" onClick={clickeequipoverde}>+1</button>
              <button className="equiponegro" onClick={clickeequiponegro}>+1</button>
            </div>
        </Contenido>
      </ModalAzul>
        </div>
    )
}



const Contenido =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #0069B4;
    text-align: center;
  }

  p{
    font-size: 18px;
    margin-bottom: 20px
  }

  button{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #0069B4;
  padding: 10px 20px 10px 20px;
  border: solid #0069B4 2px;
  text-decoration: none;
  margin: 0.5vw
  }

  .botonespuntos{
    display: flex;
    flex-direction: wrap;
    margin: 0.5vw
  }

  .equiponaranja{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #F18700;
  padding: 10px 20px 10px 20px;
  border: solid #F18700 2px;
  text-decoration: none;
  }

  .equiporojo{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #E62336;
  padding: 10px 20px 10px 20px;
  border: solid #E62336 2px;
  text-decoration: none;
  }

  .equipoazul{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #0069B4;
  padding: 10px 20px 10px 20px;
  border: solid #0069B4 2px;
  text-decoration: none;
  }

  .equipoverde{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #009E3D;
  padding: 10px 20px 10px 20px;
  border: solid #009E3D 2px;
  text-decoration: none;
  }

  .equiponegro{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: black;
  padding: 10px 20px 10px 20px;
  border: solid black 2px;
  text-decoration: none;
  }

`