import React, {useState} from "react";
import styled from 'styled-components';
import ModalNaranja from './ModalNaranja';
import "../styles/botonnaranja.css"
import { IoIosBody } from "react-icons/io";
import sonidocarta from "../sounds/sonidocarta.mp3"


const Arraynaranja = [
  {
      pregunta: "Representar en una estatua viviente a alguien ayudando a aliviar el dolor de otra persona",
      condicion: "La contención emocional, el apoyo para atravesar el dolor con acciones complementarias, en conjunto con la medicación analgésica, son clave para mejorar la calidad de la atención de la IVE/ILE.",
      categoria:  2
  },
  {
      pregunta: "Teatralizar métodos no farmacológicos para tratamiento del dolor",
      condicion: "La contención emocional, las palabras, el calor localizado, la música e iluminación suaves, así como el trato empático y respetuoso, son acciones que pueden ayudar en la mitigación del dolor.",
      categoria:  2
  },
  {
      pregunta: "Escribir un cartel con signos de alarma postaborto para colocar en el centro de salud",
      condicion: "Fiebre, dolor, sangrado, olor, dónde consultar",
      categoria:  3
  },
  {
    pregunta: "Dibujar los formatos en los que se debe dar la información sobre las pautas de alarma (ejemplo: verbal)",
    condicion: "Oral, escrito, videos, audios, Braille",
    categoria:  3
},
  {
      pregunta: "Dibujar un DIU colocado",
      condicion: "Identificar la ubicación y posición que debe tener un DIU bien colocado el clave para la realización del procedimiento y la consejería.",
      categoria:  4
  },
  {
      pregunta: "Explicar cómo se coloca un implante, pueden usarse dibujos.",
      condicion: "El implante consiste en una o dos varillas de 4 cm que se puede insertar a través de un trocar por vía subdérmica; el sitio de inserción es sobre el tríceps, unos 8 a 10 cm desde el epicóndilo medial del húmero y 3 a 5 cm posterior (debajo) del surco entre los músculos bíceps y tríceps. ",
      categoria:  4
  },
  {
      pregunta: "Mostrar con un preservativo su modo de uso.",
      condicion: "El preservativo es el único método que brinda doble protección. Evita las ITS y previene embarazos no intencionales. Por ello es de buena práctica promover su uso y, eventualmente, ofrecerlo siempre y entregarlo a la usuaria cuando lo desee.",
      categoria:  4
  },
  {
    pregunta: "Explicar cuándo y cómo debe utilizarse la anticoncepción hormonal de emergencia.",
    condicion: "La anticoncepción hormonal de emergencia puede (y debería) utilizarse siempre que se considere que se está en riesgo de tener una gestación no intencional. Pueden ser una o dos pastillas de levonorgestrel que se toman juntas, por vía oral. Lo ideal es tomarla lo antes posible, porque actúa evitando la ovulación, pero puede tomarse dentro de los 5 días de la relación sexual. No tiene contraindicaciones para su uso y puede usarse todas las veces que sea necesario. No actúa impidiendo la implantación (eso es un mito que hay que desterrar). Es de buena práctica informar sobre la posibilidad de utilizarla y, eventualmente, ofrecerla siempre y entregarla a la usuaria cuando lo desee. El DIU de cobre o el SIU (con levonorgestrel) colocados dentro de los 5 días luego de haber tenido sexo sin protección son los métodos anticonceptivos de emergencia más efectivos que existen y permiten continuar la anticoncepción durante 7 a 12 años.",
    categoria:  4
},
{
  pregunta: "Teatralizar elementos clave para sesión de consejería pre o postaborto.",
  condicion: "Cómo hablar, entrega de materiales, dar lugar para repreguntas, mirar a la cara, escuchar",
  categoria:  4
},
{
pregunta: "Dibujar los métodos anticonceptivos reversibles de larga duración y explicar por qué son más efectivos.",
condicion: "MALD: implante, DIU, SIU",
categoria:  4
},
{
pregunta: "Dibujar y explicar en qué consiste la ligadura tubaria.",
condicion: "La ligadura de trompas es un método anticonceptivo quirúrgico. Consiste en cortar, quemar o atar las trompas de Falopio, impidiendo el encuentro del óvulo con los espermatozoides. Puede hacerse con anestesia regional (raquídea o peridural), pero con cirugía a “cielo abierto''. Cuando se hace por videolaparoscopia, debe utilizarse la anestesia general. Si bien la fertilidad puede recuperarse con una nueva cirugía, la recanalización no siempre tiene éxito. Cuando la persona elija la ligadura tubaria como método anticonceptivo, deben ofrecerse métodos alternativos eficaces hasta su realización.",
categoria:  4
},
{
pregunta: "Dibujar y explicar en qué consiste la vasectomía",
condicion: "La vasectomía es un método anticonceptivo quirúrgico. Consiste en cortar y atar los conductos deferentes, que llevan los espermatozoides desde los testículos hasta la uretra. Se puede realizar con anestesia local y la recuperación es rápida. No afecta a las erecciones, y se produce líquido seminal, pero sin espermatozoides. En general, puede ser reversible con mayor facilidad que la ligadura tubaria. Cuando la persona elija la vasectomía como método anticonceptivo, deben ofrecerse métodos alternativos hasta su realización y durante los tres meses posteriores a la cirugía. Es ideal realizar un análisis de semen (espermograma) para confirmar el éxito del procedimiento.",
categoria:  4
},
  {
      pregunta: "Dibujar los elementos quirúrgicos necesarios para la realización de un AMEU, con colocación de DIU inmediato.",
      condicion: "Pinza de Pozzi o Erina, pinza para hisopo, espéculo, tijera, agujas 50/8 para anestesia paracervical, jeringas de AMEU y cánulas, gasas, DIU.",
      categoria:  1
  },
  {
      pregunta: "Armar la jeringa de AMEU en menos de 1 minuto",
      condicion: "La jeringa para la AMEU es un elemento reutilizable, por ello su manipulación y armado deben realizarse con sumo cuidado para asegurar la mayor duración y vida útil del insumo. El objetivo de esta prenda es familiarizarse con este insumo y comprender su funcionamiento.",
      categoria:  1
  },
  {
      pregunta: "Desarmar la jeringa de AMEU en menos de 1 minuto.",
      condicion: "La jeringa para la AMEU es un elemento reutilizable, por ello su manipulación y armado deben realizarse con sumo cuidado para asegurar la mayor duración y vida útil del insumo. El objetivo de esta prenda es familiarizarse con este insumo y comprender su funcionamiento.",
      categoria:  1
  },
  {
      pregunta: "Ordenar las cánulas por color.",
      condicion: "Cada color de cánula corresponde a un grosor diferente. Determinar su grosor y la elección de la misma depende del tamaño del útero en el momento de realizar el procedimiento. Varían entre 4 y 12 mm, y existen además cánulas de 14 y 16 mm para gestaciones más avanzadas.",
      categoria:  1
  },
  {
      pregunta: "Mostrar de qué modo se comprueba el funcionamiento de la  jeringa AMEU.",
      condicion: "Primer ruido: “click” de cierre de botones de la válvula. Segundo ruido: “click” de fijación de los brazos del émbolo el los lados anchos de la base del cilindro. Tercer ruido: “click” liberación de los botones de la válvula. Cuarto ruido: entrada de aire al cilindro de la jeringa.",
      categoria:  1
  },
  {
      pregunta: "Con gomitas de colores, teatralizar de qué manera explicarían a una usuaria cómo usar misoprostol solo para la preparación cervical antes de la AMEU",
      condicion: "2 comprimidos (400 μg) de misoprostol   por vía sublingual entre 1 y 2 horas antes del procedimiento (la vía más eficaz)",
      categoria:  1
  },
  {
      pregunta: "Con gomitas de colores, teatralizar de qué manera explicarían a una usuaria cómo usar misoprostol solo para la interrupción de menos de 12 semanas con medicamentos.",
      condicion: "4 comprimidos (800 μg) de misoprostol por vía vaginal, sublingual o bucal (según la preferencia de la mujer) cada 3 horas hasta la expulsión",
      categoria:  5
  },
  {
      pregunta: "Con gomitas de colores, teatralizar de qué manera explicarían a una usuaria cómo usar el combipack para la interrupción de menos de 12 semanas con medicamentos.",
      condicion: "Paso 1: 200 mg de mifepristona vía oral. Paso 2 (1 o 2 días después de tomar la mifepristona): 2 comprimidos (400 μg) de misoprostol por vía vaginal, sublingual o bucal (según preferencia de la mujer) en dosis única.",
      categoria:  5
  },
  {
      pregunta: "Representar una escena en la que enfermería recomienda cuidados para el uso de misoprostol ambulatorio",
      condicion: "Estar acompañada, contar con personas disponibles para asistirla , usar analgésicos, signos de alarma, tener celular con crédito y carga, números de urgencia, tener algo de dinero.",
      categoria:  5
  },
  {
    pregunta: "Poner caras “de enfermería”, con 3 reacciones diferentes cuando se interna alguien para interrupción de más de 13 semanas",
    condicion: "El trato respetuoso, considerado y empático con las personas que requieren una IVE/ILE es una obligación de todo el personal del efector. Quienes no hagan parte del equipo tratante deben evitar cualquier interferencia en el proceso de atención.",
    categoria:  5
},
  {
      pregunta: "Teatralizar los cuidados de enfermería a realizar durante una emergencia.",
      condicion: "Pedido de ayuda, control de signos vitales, colocar vías periféricas de grueso calibre, extraer muestra para laboratorio, preparar medicación, tener a mano todos los elementos para atender la urgencia (caja de emergencias), comunicación con la usuaria y familiar.",
      categoria:  6
  },
  {
      pregunta: "Explicar qué es la hora de oro.",
      condicion: "Son los 60 minutos iniciales, una intervención rápida y eficiente. Es crítica para el éxito del tratamiento y para que la persona pueda recuperarse sin secuelas.",
      categoria:  6
  },
  {
      pregunta: "Representar una escena de emergencia en la que no se realizan buenas prácticas. Ejemplos: el teléfono no funciona, el equipo no se entiende, no están los elementos disponibles, la caja de emergencia está bajo llave, todo el equipo trabaja desorganizadamente, y el residente del hospital al que se debe derivar no quiere recibir a La usuaria (puede ser alguna o varias situaciones)",
      condicion: "",
      categoria:  6
  }
];

export function Naranja({stateAmeu, state2, state3, state4, state5, state6, clickeoequiponaranja, clickeoequiporojo, clickeoequipoazul, clickeequipoverde, clickeequiponegro}) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false)
    const [index, setIndex] = useState(0);

    // CONDICIONES

let categoriaAmeu = Arraynaranja[index].categoria


if(stateAmeu === true){
  if (categoriaAmeu === 1){
    changeNaranja()
    }
}

    if(state2 === true){
      if (categoriaAmeu === 2){
        changeNaranja()
      }
    }

    if(state3 === true){
      if (categoriaAmeu === 3){
        changeNaranja()
      }
    }

    if(state4 === true){
      if (categoriaAmeu === 4){
        changeNaranja()
      }
    }

    if(state5 === true){
      if (categoriaAmeu === 5){
        changeNaranja()
      }
    }

    if(state6 === true){
      if (categoriaAmeu === 6){
        changeNaranja()
      }
    }

      // ALGORITMO TARJETAS AZULES
  function todosnaranja(){
    changeNaranja();
    abrirmodal1();
  }

  function changeNaranja() {
    let newIndex = Math.floor(Math.random() * (Arraynaranja.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
    setIndex(newIndex);
  }
  function abrirmodal1(){
    cambiarEstadoModal1(!estadoModal1)
  }

  const audio = new Audio(sonidocarta)


  function abrirysonar(){
    todosnaranja();
    audio.play()
  }

  

    return (
        <div>
        <button className="btnnaranja" onClick={abrirysonar}> <p>PRENDA</p>  <IoIosBody/> </button>

        <ModalNaranja
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Prenda"
        
      >
        <Contenido>
          <h1>{Arraynaranja[index].pregunta}</h1>
          <div className="botonespuntos">
              <button className="equiponaranja" onClick={clickeoequiponaranja}>+1</button>
              <button className="equiporojo" onClick={clickeoequiporojo}>+1</button>
              <button className="equipoazul" onClick={clickeoequipoazul}>+1</button>
              <button className="equipoverde" onClick={clickeequipoverde}>+1</button>
              <button className="equiponegro" onClick={clickeequiponegro}>+1</button>
            </div>
        </Contenido>
      </ModalNaranja>
        </div>
    )
}



const Contenido =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #F18700;
    text-align: center; 
    @media (max-width: 1115px) {
      font-size: 25px;
    }

    @media (max-width: 907px) {
    font-size: 20px
    }

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
  background: #F18700;
  padding: 10px 20px 10px 20px;
  border: solid #F18700 2px;
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