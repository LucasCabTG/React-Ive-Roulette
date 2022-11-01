import React, {useState} from "react";
import styled from 'styled-components';
import ModalAzul from './ModalVioleta';
import '../styles/botonvioleta.css'
import ModalVioletaRespuesta from "./ModalVioletaRespuesta";
import sonidocarta from "../sounds/sonidocarta.mp3"


const Arrayvioleta = [
    {
      pregunta: "Cuando la usuaria ingresa al consultorio o sala de internación, ¿qué es lo primero que debemos hacer?",
      respuesta: "Saludar y presentarnos.",
  },
  {
      pregunta: "Si llega una mujer con una hemorragia por aborto, ¿que sería lo primero que hay que hacer?",
      respuesta: "Pedir ayuda y colocar una o dos vías periféricas de grueso calibre. Controlar los signos vitales. Tener a mano todos los elementos para la atención de la emergencia (caja de emergencia). Comunicarse con la usuaria y su acompañante.",
  },
  {
      pregunta: "¿Cómo deberíamos llamar a la usuaria? ",
      respuesta: "Como a ella le gustaría ser llamada. Debemos preguntárselo. ",
  },

  {
      pregunta: "¿Cuál es el régimen más efectivo para el aborto con medicamentos antes de las 12 semanas? ",
      respuesta: "Mifepristona y misoprostol",
  },
  {
      pregunta: "¿Qué beneficios tiene la asociación de mifepristona y misoprostol?",
      respuesta: "Aumenta la efectividad y disminuye los efectos secundarios y el sangrado.",
  },
  {
      pregunta: "¿Qué es lo más importante de corroborar al momento del alta médica?",
      respuesta: "Que se haya comprendido TODO.",
  },
  {
      pregunta: "A partir de qué edad gestacional debe colocarse la gammaglobulina anti D (cuando corresponda)?",
      respuesta: " A partir de las 12 semanas.",
  },
  {
      pregunta: "¿Dentro de cuántos días después del procedimiento se debe colocar la gammaglobulina anti D?",
      respuesta: "Debe administrarse dentro de los tres días posteriores al procedimiento para mejores resultados",
  },
  {
      pregunta: "¿La ecografía de control debe pedirse de rutina después del aborto médico o quirúrgico?",
      respuesta: "No",
  },
  {
      pregunta: "¿La ecografía es útil para diagnosticar un aborto incompleto?",
      respuesta: "No, el diagnóstico del aborto incompleto es clínico.",
  },
  {
      pregunta: "¿Cuál es el único hallazgo en el que se debe intervenir cuando se pide una ecografía de control?",
      respuesta: "La continuación de la gestación",
  },
  {
      pregunta: "¿Qué analgésicos pueden usarse para el aborto?",
      respuesta: "Ibuprofeno 400 mg. Naproxeno 500 mg. Ketorolac 20 mg. ",
  },
  {
      pregunta: "¿Qué cosas son importantes antes de usar misoprostol ambulatorio?",
      respuesta: "Estar acompañada, tener teléfono con crédito y batería, tener acceso a guardia, tener en claro los signos de alarma, saber a qué guardia consultar.",
  },
  {
    pregunta: "¿Cuántos son los criterios de elegibilidad de la OMS?",
    respuesta: "Cuatro.",
},
{
    pregunta: "¿Qué significa la categoría 1 de los Criterios de elegibilidad de la OMS?",
    respuesta: "El método se puede usar siempre.",
},
{
    pregunta: "¿Qué significa la categoría 2 de los Criterios de elegibilidad de la OMS?",
    respuesta: "El método se puede usar igual, porque los beneficios de usarlo superan a los riesgos.",
},
{
    pregunta: "¿Qué significa la categoría 3 de los Criterios de elegibilidad de la OMS?",
    respuesta: "Se recomienda no usar el método porque los riesgos superan a los beneficios (salvo que no haya otras opciones).",
},
{
    pregunta: "¿Qué significa la categoría 4 de los Criterios de elegibilidad de la OMS?",
    respuesta: "El método está contraindicado y no debe usarse nunca.",
},
{
    pregunta: "¿En cuánto tiempo puede recuperarse la fertilidad luego de un aborto?",
    respuesta: "10-15 días.",
},
{
    pregunta: "¿Por qué siempre hay que tener 2 jeringas de AMEU disponibles en el lugar?",
    respuesta: "Porque si no funciona una, se debe tener otra a mano rápidamente para no aumentar la duración del  procedimiento.",
},
{
    pregunta: "¿Qué son el implante subdérmico y el DIU? ",
    respuesta: "Métodos anticonceptivos reversibles de larga duración.",
},
{
    pregunta: "Ventajas de la anticoncepción inmediata post aborto",
    respuesta: "Se aprovecha la oportunidad en salud. Mejora la adherencia a los métodos (amyor efectividad). La usuaria se asegura su derecho a acceder al método elegido rápidamente.",
},
{
    pregunta: "¿Cómo se debe almacenar la jeringa para AMEU?",
    respuesta: "Armada, lubricada y lista para su uso, en un ambiente seco y limpio.",
},
{
    pregunta: "¿Las cánulas deben estar estériles antes de su uso?",
    respuesta: "Siempre. Deben permanecer estériles o desinfectadas a alto nivel hasta su próximo uso. ",
},
{
    pregunta: "¿Las jeringas deben estar estériles antes de su uso?",
    respuesta: "No. Deben esterilizarse o someterse a desinfección de alto nivel luego de utilizarse. No es necesario que el aspirador permanezca desinfectado a alto nivel o esterilizado en el momento de utilizarse.",
},
{
    pregunta: "¿Cada cuánto deben procesarse las cánulas si se utilizan métodos húmedos para la esterilización o desinfección?",
    respuesta: "Diariamente.",
},
{
    pregunta: "¿Qué se debería hacer alguien que empapa 3 apósitos en 1 hora, luego de un aborto? ",
    respuesta: "Asistir a la guardia.",
},
{
    pregunta: "¿Cuáles son los efectos colaterales más frecuentes del implante?",
    respuesta: "Sangrado intermitente, falta de sagrado, aumento leve de peso.",
},
{
    pregunta: "¿Cuáles son los métodos anticonceptivos más efectivos?",
    respuesta: "DIU de cobre y de levonorgestrel, implante subdérmico, métodos quirúrgicos.",
},
{
    pregunta: "¿Qué contraindicaciones tienen los anticonceptivos orales combinados?",
    respuesta: "Hipertensión arterial no controlada, tabaquismo más 20 cigarrillos, más de 35 años con factores de riesgo, cáncer de mama u ovario, trombosis venosa profunda activa.",
},
{
    pregunta: "¿Qué hay que hacer antes de inyectar lidocaína?",
    respuesta: "Aspirar para asegurarse de que no se está dentro de un vaso sanguíneo.",
},
{
    pregunta: "¿Qué técnicas son útiles para el tratamiento no farmacológico del dolor en el aborto?",
    respuesta: "Apoyo emocional, masajes, bolsas o compresas con agua tibia.",
},
{
    pregunta: "¿Qué dosis de misoprostol se utiliza para la preparación cervical para la AMEU?",
    respuesta: "400 mcg (dos comprimidos) sublingual, 2 horas antes del procedimiento.",
},
{
    pregunta: "Nombre un método anticonceptivo de barrera.",
    respuesta: "Preservativo, diafragma, capuchón cervical.",
},
{
    pregunta: "Nombre 1 método anticonceptivo quirúrgico",
    respuesta: "Vasectomía y lisis tubaria.",
},
{
    pregunta: "Además del método elegido, ¿qué MAC se debería ofrecer y entregar a la usuaria si lo desea?",
    respuesta: "Anticoncepción hormonal de emergencia y preservativos.",
},
{
    pregunta: "¿Cuáles son los tres antibióticos recomendados para la profilaxis de la infección en el aborto quirúrgico? ",
    respuesta: "Azitromicina, doxiciclina, metronidazol.",
},
{
    pregunta: "¿Qué síntomas sugieren que el aborto con medicamentos no dio resultado?  ",
    respuesta: "Falta de dolor. Ausencia de sangrado o sangrado escaso, sin que se vean coágulos, persistencia de los síntomas de embarazo.",
},
{
    pregunta: "Nombre 2 métodos anticonceptivos hormonales.",
    respuesta: "Píldoras, parches, anillos vaginales, inyectables e implantes.",
},
{
    pregunta: "¿Desde qué momento se puede colocar el DIU de cobre luego del aborto con medicamentos?",
    respuesta: "Apenas comprobada la evacuación del útero.",
},
{
    pregunta: "¿Qué es lo primero que debe hacerse cuando llega a la guardia una persona con una hemorragia posaborto?",
    respuesta: "Pedir ayuda.",
},
{
    pregunta: "¿Dónde debe guardarse la caja con los materiales para el tratamiento de la emergencia posaborto?",
    respuesta: "A la vista, en un lugar accesible.",
},
{
    pregunta: "¿Qué es la “hora de oro” en la emergencia?",
    respuesta: "Es la primera hora, en la que el diagnóstico y tratamiento tempranos son claves para el éxito del tratamiento y para que la persona se recupere sin secuelas.",
},
{
    pregunta: "¿Por qué es importante contar con sistemas que aseguren una buena comunicación durante la emergencia? ",
    respuesta: "Porque la buena comunicación con la usuaria y su familia, dentro y entre los equipos es fundamental para los buenos resultados. ",
},
{
    pregunta: "¿Es importante preservar la confidencialidad durante y después del tratamiento de la emergencia por aborto?",
    respuesta: "Si, porque los principios rectores de la atención deben respetarse siempre y la ley y la ética profesional nos obligan a cumplirlos.",
},
{
    pregunta: "Si en mi guardia entra una mujer con un aborto en curso, ¿puedo dejar de atenderla por ser objetor/a de conciencia?",
    respuesta: "No, porque el deber de asistencia es un derecho de las personas y porque la Ley 27.610 establece que no se puede objetar en esa circunstancia.",
}
  ];

export function Violeta() {
    const [estadoModal8, cambiarEstadoModal8] = useState(false)
    const [index, setIndex] = useState(0);

    const [estadoModalVioleta, cambiarEstadoModalVioleta] = useState(false)


      // ALGORITMO TARJETAS AZULES
  function todosvioleta(){
    changevioleta();
    abrirmodal8()
  }

  function changevioleta() {
    let newIndex = Math.floor(Math.random() * (Arrayvioleta.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
    setIndex(newIndex);
  }
  function abrirmodal8(){
    cambiarEstadoModal8(!estadoModal8)
  }

  function mostrarRespuestaVioleta(){
    cambiarEstadoModalVioleta(!estadoModalVioleta)
  }

  const audio = new Audio(sonidocarta)

  function abrirysonar(){
    todosvioleta();
    audio.play()
  }

  function pasarysonar(){
    changevioleta();
    audio.play()
  }



    return (
        <div>
        <button className="btnvioleta" onClick={abrirysonar}>INICIAR RONDA RAPIDA</button>

        <ModalAzul
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
        titulo="RONDA RAPIDA"
        
      >
        <Contenido>
          <h1>{Arrayvioleta[index].pregunta}</h1>
          <div className="botones">
          <button className="verrespuesta" onClick={mostrarRespuestaVioleta}>VER RESPUESTA</button>
          <button className="botonsiguiente" onClick={pasarysonar}>SIGUIENTE</button>
          </div>


        </Contenido>

      </ModalAzul>

      <ModalVioletaRespuesta
        estado={estadoModalVioleta}
        cambiarEstadoVioleta={cambiarEstadoModalVioleta}>
            <Contenido><h1>{Arrayvioleta[index].respuesta}</h1></Contenido>

      </ModalVioletaRespuesta>
        </div>
    )
}



const Contenido =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #6D3E91;
    text-align: center;
  }

  p{
    font-size: 18px;
    margin-bottom: 20px
  }

  .botones{
    position: absolute;
    display: flex;
    flex-direction: row;
    bottom: 5%;  }

  .botonsiguiente{
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
  cursor: pointer
  }

  .verrespuesta{
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
  cursor: pointer
  }

`