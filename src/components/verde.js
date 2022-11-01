import React, {useState} from "react";
import styled from 'styled-components';
import ModalVerde from './ModalVerde';
import "../styles/botonverde.css"
import ModalVerdeRespuesta from "./ModalverdeRespuesta";
import { FaStopwatch } from "react-icons/fa";
import sonidocarta from "../sounds/sonidocarta.mp3"



const Arrayverde = [
  {
      pregunta: "Métodos (farmacológicos y no farmacológicos) recomendados s para el alivio del dolor durante el aborto quirúergico.",
      respuesta: "Ibuprofeno, AINEs, naproxeno, ketorolac, bolsa y compresas tibias, digito puntura, ejercicios de relajación, contención emocional. Anestesia paracervical, sedación.",
      categoria:  2
  },
  {
      pregunta: "Efectos secundarios de la lidocaína paracervical, durante la AMEU",
      respuesta: "Entre los posibles efectos secundarios se encuentran: hormigueo en la boca, labios o lengua, tinnitus o zumbidos, sabor metálico, mareos, convulsiones o pulso irregular/lento, arritmias graves (con inyección intravascular), alergias (raras).",
      categoria:  2
  },
  {
      pregunta: "Tips para crear un entorno más agradable durante la AMEU",
      respuesta: "Luz tenue, temperatura adecuada, música relajante (no común a la persona, para evitar que la relacione con el momento), preservar la intimidad, ambiente agradable, compresas para cubrirse, golpear la puerta antes de entrar, hablar en tono normal y pausado, preguntar a la persona como quiere ser llamada. s",
      categoria:  2
  },
  {
      pregunta: "Signos de alarma luego de una AMEU",
      respuesta: "Sangrado abundante o persistente, temperatura mayor a 38°C, dolor bajo vientre que no calma con analgesia, olor fétido, mareos.",
      categoria:  3
  },
  {
      pregunta: "Cuidados de higiene personal luego de un aborto.",
      respuesta: "No tener relaciones vaginales, no introducir nada en vagina, no usar bidet, no baños de inmersión, no usar tampones mientras persista el sangrado. Alimentarse bien, descansar según lo pida el cuerpo.",
      categoria:  3
  },
  {
      pregunta: "Signos de alarma en el aborto con medicamentos.",
      respuesta: "Sangrado abundante o persistente, temperatura mayor a 38°C, dolor bajo vientre que no calma con analgesia, olor fétido, mareos. Sangrado escaso o falta de sangrado, persistencia de los síntomas de embarazo.",
      categoria:  3
  },
  {
      pregunta: "Métodos anticonceptivos que pueden utilizarse de manera inmediata luego de la evacuación de útero.",
      respuesta: "Todos. Se recomienda no iniciar relaciones sexuales con penetración vaginal mientras haya sangrado). Sin embargo, se debe tener precaución con  los  métodos basados en el conocimiento de la fertilidad después de un aborto. El uso de los métodos basados en el calendario debe retrasarse hasta que se regularicen los ciclos. Cuando la persona desee un método anticonceptivo que no puede administrarse o aplicarse en forma inmediata deben ofrecerse métodos anticonceptivos temporales alternativos.",
      categoria:  4
  },
  {
      pregunta: "Puntos clave sobre los métodos anticonceptivos que debe explicarse en la consejería.",
      respuesta: "Cuándo se recupera la fertilidad luego de un aborto, cómo funcionan, cuánto tiempo tardan en actuar, cómo deben usarse, qué ventajas y desventajas tienen, qué efectividad tienen, cuáles son los efectos colaterales e indeseables, cuánto se tarda en recuperar la fertilidad al dejarlos, dónde consultar ante dudas o problemas. Pensar en las dificultades en la disponibilidad o el acceso.",
      categoria:  4
  },
  {
      pregunta: "Tips para la consejería en anticoncepción pre y postaborto.",
      respuesta: "Brindar información sobre todos los métodos conocidos, evacuar dudas, educación sobre el método seleccionado, chequear que todo haya sido comprendido, entregar información en diferentes soportes (escrito, oral, videos, audio, braille), indagar acerca de las necesidades y mejores opciones para la persona usuaria, incluyendo la disponibilidad y la posibilidad de acceder a los métodos de manera continua (continuidad).",
      categoria:  4
  },
  {
      pregunta: "Ventajas de la AMEU con respecto al legrado uterino.",
      respuesta: "Es tan eficaz como el legrado para el tratamiento del aborto incompleto. Reduce la duración del procedimiento, la pérdida de sangre relacionada con el procedimiento y el dolor. Se asocia con menos complicaciones graves y leves. Puede ser efectuada como un tratamiento ambulatorio por médicos o profesionales de salud de nivel intermedio, sin necesidad de anestesia general. Los costos para el sistema de salud y las usuarias son menores. No requiere o implica menos horas de internación que un legrado.",
      categoria: 1
  },
  {
      pregunta: "Pasos para el procesamiento de material de AMEU.",
      respuesta: "1- Descontaminación por remojo (dejarse en remojo con solución desinfectante enzimática hasta que pueda lavarse). 2- Lavado. desarmar el dispositivo y lavarlo con agua tibia, detergente, esponja y cepillo suave. 3- Desinfección de alto nivel y/o esterilización. 4- Almacenamiento.",
      categoria: 1
  },
  {
      pregunta: "Ejemplos de por qué es importante registrar todas las acciones de enfermería correctamente en la historia clínica y en otros sistemas de registro.",
      respuesta: "Información clínica para el resto del equipo y para los efectores de referencia y contrarreferencia, validez legal de los registros, relevamiento estadístico, monitoreo de buenas prácticas. Se debe entregar siempre la epicrisis a la usuaria con toda la información relevante. Utilizar hojas de referencia y contrarreferencia cuando las usuarias sean derivadas de un efector a otro.",
      categoria: 1
  },
  {
      pregunta: "Efectos adversos del misoprostol.",
      respuesta: "Sangrado. Dolor o cólicos abdominales. Síntomas gastrointestinales: diarrea, náuseas y vómitos pasajeros.  Fiebre/escalofríos (son normales dentro de las 24 horas posteriores al tratamiento).",
      categoria:  5
  },
  {
      pregunta: "Usos del misoprostol en ginecología y obstetricia.",
      respuesta: "Inducción del trabajo de parto con feto vivo. Inducción del trabajo de parto con feto muerto. Hemorragia posparto. Aborto terapéutico. Manejo del aborto incompleto, del aborto retenido, de la evacuación del huevo anembrionado. Maduración/permeabilización del cuello uterino en forma previa a la instrumentación en ginecología.",
      categoria:  5
  },
  {
      pregunta: "Qué se debe advertir a las mujeres durante el uso de misoprostol para el aborto con medicamentos en forma ambulatoria ",
      respuesta: "Efectos colaterales, qué esperar, signos de alarma, analgésicos, cuándo acudir a una guardia, estar acompañadas, teléfono, tener disponible alguna forma de traslado inmediata si se requiere, no consumir sustancias que alteren la percepción para reconocer los signos de alarma, cuándo realizar la visita de control, adónde y/o con quién consultar en caso de urgencia o emergencia.",
      categoria:  5
  },
  {
      pregunta: "Síntomas y signos de la hemorragia postaborto.",
      respuesta: "Sangrado importante (empapa más de dos apósitos femeninos grandes por hora durante más de dos horas consecutivas o más de tres apósitos en una hora). Sangrado abundante repentino, después de que este disminuyó o se detuvo durante varios días luego de haber tomado misoprostol. Sangrado continuo durante varios días que no disminuye y/o mareos. Hipotensión. Alteración en la FC (taquicardia) Palidez.",
      categoria:  6
  },
  {
      pregunta: "Síntomas y signos de la infección postaborto.",
      respuesta: "Fiebre (T° mayor a 38°C) luego de las 24 hs de realizado el tratamiento. Dolor abdominal, que no mejora después de tomar analgésicos y que empeora con los días. Flujo con olor fétido.",
      categoria:  6
  },
  {
      pregunta: "Acciones de enfermería ante una emergencia por aborto.",
      respuesta: "Pedido de ayuda, control de signos periféricos, colocar vías periféricas de grueso calibre, extraer muestra para laboratorio, preparar medicación, tener a mano todos los elementos para atender la urgencia (caja de emergencias), comunicación con la usuaria y familiar.",
      categoria:  6
  },
  {
    pregunta: "Elementos debería tener una caja de emergencia para tratamiento de la hemorragia postaborto",
    respuesta: "Catéteres periféricos n°18/16, sueros fisiológicos, perfus, misoprostol, oxitocina, ergonovina, tubos de laboratorio, compresas, balón de Bakri, sonda Foley, jeringas/agujas, gasas, cinta adhesiva. También es importante conocer y tener visibles los algoritmos de tratamiento (algoritmos de pared) y tener a mano los contactos telefónicos de las personas de guardia y de otros efectores de mayor complejidad. Disponer siempre de medios de comunicación rápida y segura (teléfono, celular con señal, equipo de radiofrecuencia)",
    categoria:  6
}
];

export function Verde({stateAmeu, state2, state3, state4, state5, state6, clickeoequiponaranja, clickeoequiporojo, clickeoequipoazul, clickeequipoverde, clickeequiponegro}) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false)
    const [index, setIndex] = useState(0);

    const [estadoModal3, cambiarEstadoModal3] = useState(false)





      // ALGORITMO TARJETAS AZULES
  function todosverde(){
    changeVerde();
    abrirmodal1();
  }


      // CONDICIONES

      let categoriaAmeuverde = Arrayverde[index].categoria


      if(stateAmeu === true){
        if (categoriaAmeuverde === 1){
          changeVerde()
        }
      }
  
      if(state2 === true){
        if (categoriaAmeuverde === 2){
          changeVerde()
        }
      }
  
      if(state3 === true){
        if (categoriaAmeuverde === 3){
          changeVerde()
        }
      }
  
      if(state4 === true){
        if (categoriaAmeuverde === 4){
          changeVerde()
        }
      }
  
      if(state5 === true){
        if (categoriaAmeuverde === 5){
          changeVerde()
        }
      }
  
      if(state6 === true){
        if (categoriaAmeuverde === 6){
          changeVerde()
        }
      }


  function changeVerde() {
    let newIndex = Math.floor(Math.random() * (Arrayverde.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
    setIndex(newIndex);
  }
  function abrirmodal1(){
    cambiarEstadoModal1(!estadoModal1)
  }

  function VerRespuesta(){
    cerrarmodal1();
    mostrarRespuesta();
  }

  function mostrarRespuesta(){
    cambiarEstadoModal3(!estadoModal3)
  }

  function cerrarmodal1(){
    cambiarEstadoModal1(false)
  }

  const audio = new Audio(sonidocarta)

  function abrirysonar(){
    todosverde();
    audio.play()
  }

    return (
        <div>
        <button className="btnverde" onClick={abrirysonar}> <p>NOMBRAR EN UN MINUTO</p>  <FaStopwatch/> </button>

        <ModalVerde
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Un minuto para nombrar"
        
      >
        <Contenido>
          <h1>{Arrayverde[index].pregunta}</h1>
          <button onClick={VerRespuesta}>Ver Respuesta</button>
        </Contenido>
      </ModalVerde>
      <ModalVerdeRespuesta
      estado={estadoModal3}
      cambiarEstado3={cambiarEstadoModal3}>
        <Contenido>
        <p>{Arrayverde[index].respuesta}</p>
        <div className="botonespuntos">
              <button className="equiponaranja" onClick={clickeoequiponaranja}>+1</button>
              <button className="equiporojo" onClick={clickeoequiporojo}>+1</button>
              <button className="equipoazul" onClick={clickeoequipoazul}>+1</button>
              <button className="equipoverde" onClick={clickeequipoverde}>+1</button>
              <button className="equiponegro" onClick={clickeequiponegro}>+1</button>
            </div>
        </Contenido>
      </ModalVerdeRespuesta>
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
    color: #009E3D;
    text-align: center
  }

  p{
    font-size: 23px;
    margin-bottom: 20px;
    text-align: center
  }

  button{
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
  margin: 0.5vw
  }

  .botonespuntos{
    display: flex;
    flex-direction: wrap;
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