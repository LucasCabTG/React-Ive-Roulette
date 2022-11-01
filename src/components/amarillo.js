import React, {useState} from "react";
import styled from 'styled-components';
import ModalAmarillo from './ModalAmarillo';
import "../styles/botonamarillo.css";
import ModalAmarilloRespuesta from "./modal";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import sonidocarta from "../sounds/sonidocarta.mp3"



const Arrayamarillo = [
  {
    pregunta: "La mujer requiere una anestesia general para realizar la AMEU.",
    respuesta: "La AMEU se puede realizar con anestesia local paracervical más AINES orales o, si es necesario, con sedación analgésica.",
    VoF: "FALSO",
    categoria:  2
  },
  {
    pregunta: "Se deben prescribir analgésicos de rutina para el aborto con medicamentos.",
    respuesta: "Siempre se deben prescribir y, si es posible, entregar analgésicos, indicando en forma oral y escrita cómo deben tomarse. Se deben tomar de rutina y reglados durante el aborto con medicamentos. Ver materiales entregables en Anexo N° 13.",
    VoF: "VERDADERO",
    categoria:  2
  },
  {
    pregunta: "Una compresa o un envase de suero tibio en el abdomen pueden servir para analgesia no farmacológica durante la AMEU.",
    respuesta: "El uso de medicamentos y bloqueo paracervical se debe complementar con técnicas de apoyo para disminuir el dolor y la ansiedad en la AMEU. Algunas estrategias útiles son: acercar información sobre qué esperar durante el procedimiento; realizar el procedimiento en un entorno limpio y privado; brindar apoyo verbal; utilizar maniobras delicadas para realizar el procedimiento; y aplicar una almohadilla térmica o bolsa de agua caliente sobre el abdomen bajo en la sala de recuperación.",
    VoF: "VERDADERO",
    categoria:  2
  },
  {
      pregunta: "La contención emocional ayuda al alivio del dolor al reducir la ansiedad.",
      respuesta: "Quienes travesaron un aborto le dieron una alta calificación a las intervenciones no farmacológicas y recomendaron su uso, en particular las de personas dedicadas a brindar apoyo a las usuarias. Sin embargo, estos métodos complementarios no son sustitutos para el manejo del dolor con medicamentos. ",
      VoF: "VERDADERO",
      categoria:  2
  
    },
    {
        pregunta: "El paracetamol es el mejor analgésico para el aborto.",
        respuesta: "El paracetamol no es eficaz para el manejo del dolor durante el aborto con medicamentos ni en la aspiración por vacío. No debe usarse, salvo alergia o contraindicación para antinflamatorios no esteroideos (AINEs). Los AINEs están recomendados son el ibuprofeno, naproxeno o ketorolac.  Deben administrarse aproximadamente una hora antes del inicio del procedimiento quirúrgico (AMEU) o de la toma del primer comprimido de misoprostol.",
        VoF: "FALSO",
        categoria:  2
  
    },
    {
        pregunta: "Si hay fiebre o escalofríos mientras se está usando misoprostol se debe concurrir inmediatamente a una guardia.",
        respuesta: "Es común que el tratamiento con misoprostol produzca efectos secundarios que pueden ser molestos, pero que no deben generar alarma si aparecen dentro las 24 horas de iniciado el tratamiento. Ejemplos: dolor abdominal, escalofríos, náuseas, vómitos, cólicos, diarrea, fiebre mientras dura el proceso. Si hay fiebre (mayor a 38° tomada con termómetro en la axila) un día después del tratamiento se debe consultar a una guardia.",
        VoF: "FALSO",
        categoria:  3
  
    },
    {
        pregunta: "Se debe advertir a las usuarias que si el dolor va en aumento luego de terminado el aborto, deben consultar a una guardia o a su centro de salud.",
        respuesta: "El dolor puede ser síntoma de que quedaron restos ovulares o de que está comenzando un cuadro de infección. Si luego de las 24 horas hay dolor abdominal fuerte, que no mejora después de tomar analgésicos, se debe consultar a una guardia.",
        VoF: "VERDADERO",
        categoria:  3
  
    },
    {
        pregunta: "Siempre se deben advertir los signos de alarma en el aborto y postaborto, explicando y anotando todo por escrito.",
        respuesta: "Siempre se deben dar instrucciones al alta en forma clara y en diferentes formatos (oral, escrito, etc.). Asegurarse de que toda la información haya sido comprendida.",
        VoF: "VERDADERO",
        categoria:  3
  
    },
    {
        pregunta: "Si se llenan de sangre más de dos toallas femeninas empapadas por hora durante dos horas seguidas o más de tres en una hora, se debe recurrir a una guardia. ",
        respuesta: "Los síntomas y signos sugestivos de hemorragia son: sangrado abundante que empapa completamente 4 toallitas (apósitos) en 2 horas seguidas; sangrado persistente más de 2 semanas, o que aumenta con los días; mareos o cansancio intensos",
        VoF: "VERDADERO",
        categoria:  3
  
    },
    {
        pregunta: "Si se tiene una pérdida de sangre con algunos coágulos luego de un aborto inducido con misoprostol sabemos que el tratamiento resultó efectivo.",
        respuesta: "A veces pueden presentarse algunos coágulos pequeños sin que necesariamente el aborto se haya producido. Cuando se realiza el aborto con medicamentos de manera ambulatoria utilizando sólo misoprostol es conveniente realizar siempre la consulta de seguimiento (con eventual ecografía). La combinación de mifepristona y misoprostol tiene tasas más altas de éxito.",
        VoF: "FALSO",
        categoria:  3
  
    },
    {
        pregunta: "Se deben esperar por lo menos quince días para empezar a usar cualquier método anticonceptivo.",
        respuesta: "La OMS establece que casi todos los métodos anticonceptivos pueden utilizarse de inmediato, una vez  confirmada la evacuación uterina. El término “inicio inmediato de la anticoncepción” se refiere al día mismo del procedimiento o una vez confirmada la expulsión.",
        VoF: "FALSO",
        categoria:  4
  
    },
    {
        pregunta: "Las mujeres deben ser informadas sobre la posibilidad de volver a embarazarse luego de dos semanas de producido el aborto.",
        respuesta: "Se debe informar y analizar el riesgo de quedar embarazada nuevamente antes de su próxima menstruación, y el posible retorno a la fertilidad dentro de las 2 semanas siguientes al aborto.",
        VoF: "VERDADERO",
        categoria:  4
  
    },
    {
        pregunta: "El DIU puede colocarse en el mismo procedimiento de AMEU.",
        respuesta: "El dispositivo intrauterino con cobre o con levonorgestrel (DIU/SIU) puede colocarse inmediatamente después de un aborto completo. Puede ser un aborto a cualquier edad gestacional, con  medicamentos o quirúrgico. Cuando la mujer elige el DIU después de un aborto con medicamentos, éste debe colocarse cuando se tenga certeza razonable de que ya no está embarazada. Cuando hay infección, la colocación del DIU debe postergarse (categoría 4 OMS)",
        VoF: "VERDADERO",
        categoria:  4
  
    },
    {
        pregunta: "Según la OMS, sólo el personal médico puede realizar la colocación de implantes.",
        respuesta: "Colocación y extracción de implantes: cuando las normas locales lo permiten y el personal recibió el entrenamiento adecuado, puede ser realizada por profesionales de la enfermería, de la obstetricia  y de la medicina (especialistas y no especialistas). Sólo se sugiere  para auxiliares de enfermería y obstétricas auxiliares en el contexto de un seguimiento y evaluación focalizados. ",
        VoF: "FALSO",
        categoria:  4
  
    },
    {
        pregunta: "Según la OMS, sólo el personal médico puede realizar la colocación de DIU.",
        respuesta: "Colocación y extracción de implantes: cuando las normas locales lo permiten y el personal recibió el entrenamiento adecuado, puede ser realizada por profesionales de la enfermería (enfermeras, enfermeras-parteras auxiliares), de la obstetricia (obstétricas)  y de la medicina (especialistas y no especialistas).",
        VoF: "FALSO",
        categoria:  4
  
    },
    {
        pregunta: "Según la OMS, el personal de enfermería puede realizar tareas de consejería durante el proceso de atención del aborto, incluyendo la anticoncepción.",
        respuesta: "La OMS recomienda que el personal de enfermería (auxiliares de enfermería, enfermeras auxiliares parteras, enfermeras y de obstetricia (obstétricas) suministren información y presten orientación durante el continuo de atención.",
        VoF: "VERDADERO",
        categoria:  4
  
    },
    {
        pregunta: "Los anticonceptivos hormonales (inyectables, píldoras, implante, anillo, parches) deben comenzarse recién cuando se presenta la primera menstruación luego del aborto. ",
        respuesta: "Hay que considerar que se  puede volver a ovular a los 14 días del procedimiento, por lo que puede haber una nueva gestación incluso antes de una nueva menstruación. Para las personas que desean utilizar métodos anticonceptivos luego de un aborto quirúrgico se recomienda iniciarlos en el momento del procedimiento. Para métodos anticonceptivos hormonales luego de un aborto con medicamentos, se sugiere iniciar la anticoncepción hormonal inmediatamente después de la administración de la primera pastilla para el aborto. Cuando la persona desee un método anticonceptivo que no puede administrarse o colocarse en forma inmediata deben ofrecerse métodos anticonceptivos temporales alternativos.",
        VoF: "FALSO",
        categoria:  4
    },
    {
        pregunta: "La posibilidad de la persona de acceder al método o la continuidad del suministro de los métodos anticonceptivos no es importante en el momento de elegir un método efectivo. ",
        respuesta: "El equipo de salud debe asegurar la disponibilidad y el acceso de métodos anticonceptivos seguros y eficaces preferentemente en la misma institución, o en otros centros de salud cercanos. Además, el equipo debe valorar las barreras que podrían limitar el acceso o el uso exitoso de algunos métodos y considere, junto con la persona, posibles formas de resolverlas o trabajar alrededor de ellas.",
        VoF: "FALSO",
        categoria:  4
    },
    {
        pregunta: "La AMEU es un método cruento, que sólo debe realizarse en instituciones con alto nivel de complejidad.",
        respuesta: "La aspiración endouterina es un procedimiento seguro, simple y efectivo. La AMEU es el método de elección para la evacuación uterina durante el aborto quirúrgico (ILE/IVE) o tratamiento quirúrgico del posaborto (aborto incompleto, detenido, etc.). Debe reemplazar totalmente el uso del legrado uterino. Tampoco se recomienda la verificación con cureta (es decir, para completar el aborto) después de la aspiración al vacío. Se recomienda iniciar antibióticos profilácticos antes del procedimiento de AMEU para reducir el riesgo de infección posoperatoria, tanto para la ILE/IVE como en el tratamiento quirúrgico del aborto incompleto. Se pueden utilizar doxiciclina, metronidazol o azitromicina.",
        VoF: "VERDADERO",
        categoria:  1
    },
    {
        pregunta: "Para la desinfección de alto nivel se puede hervir el material durante 20 minutos, retirar y dejar enfriar.",
        respuesta: "Desinfección de alto nivel. Opciones: 1- Ebullición: hervir durante 20 min. Si las cánulas se sujetan mientras están calientes pueden aplanarse. Dejar que el agua se enfríe antes de sacar las cánulas y sujetarlas por el adaptador/base. 2- Cloro al 0,5%: sumergir completamente el instrumental en una solución de cloro al 0.5% durante 20 minutos. Cambiar la solución de cloro una vez al día o antes si ésta se enturbia. 3- Glutaraldehído al 2% (CidexⓇ o l equivalente): sumergir  completamente el instrumental en una solución de glutaraldehído al 2% (CidexⓇ o el equivalente) durante el tiempo recomendado por el fabricante: varía entre 20 a 90 min. 4- Solución de Sporox IIⓇ: sumergir  completamente el instrumental en una solución de Sporox IIⓇ durante 30 min",
        VoF: "VERDADERO",
        categoria:  1
    },
    {
      pregunta: "En la práctica de AMEU se deben administrar antibióticos 1 a 2 horas antes del procedimiento para profilaxis de la infección.",
      respuesta: "Se recomienda iniciar antibióticos profilácticos antes del procedimiento de AMEU para reducir el riesgo de infección posoperatoria, tanto para la ILE/IVE como en el tratamiento quirúrgico del aborto incompleto. Se pueden utilizar doxiciclina, metronidazol o azitromicina.",
      VoF: "VERDADERO",
      categoria:  1
  },
    {
        pregunta: "Las jeringas para aspiración del equipo de AMEU no requieren ser sometidas a desinfección de alto nivel o esterilización.",
        respuesta: "Antes de su reutilización, tanto las cánulas como el aspirador (jeringa) deben esterilizarse o someterse siempre a una desinfección de alto nivel. Si bien el aspirador no entra en contacto directo con el cuerpo, existe el riesgo de que algunos contaminantes puedan transmitirse durante el procedimiento siguiente. ",
        VoF: "FALSO",
        categoria:  1
    },
    {
        pregunta: "Las cánulas deben encontrarse estériles o procesadas con desinfección de alto nivel (DAN) en el momento de introducirse en el útero.",
        respuesta: "Las cánulas deben encontrarse estériles o procesadas con DAN al introducirse en el útero y deben permanecer estériles o con DAN hasta su próximo uso. Los instrumentos procesados con métodos mojados deben ser reprocesados a diario. Los aspiradores (jeringas) deben esterilizarse o someterse a DAN luego de ser usados. No es necesario que el aspirador permanezca DAN o esterilizado en el momento de utilizarse y puede colocarse en un área limpia o guardarse en conformidad con las normas locales.",
        VoF: "VERDADERO",
        categoria:  1
    },
    {
        pregunta: "Según la OMS, el personal de enfermería puede realizar procedimientos de AMEU.",
        respuesta: "Cuando la normativa local lo permite y el personal recibió el entrenamiento adecuado, la OMS recomienda la aspiración al vacío por parte del personal de enfermería y obstetricias (entre otros) antes de las 14 semanas. Está sugerida en contextos específicos   para  auxiliares de enfermería y  obstétricas auxiliares capacitadas.",
        VoF: "VERDADERO",
        categoria:  1
    },
    {
        pregunta: "La lidocaína en la anestesia paracervical no provoca ningún síntoma.",
        respuesta: "Entre los posibles efectos secundarios se encuentran: zumbido en los oídos; mareo; adormecimiento en los labios, la boca y la lengua; sabor metálico; convulsiones (muy raro); reacción alérgica (muy rara). Importante: aspirar previamente a la inyección para verificar que no se está inyectando en un vaso sanguíneo, ya que puede provocar arritmias severas o potencialmente letales (si se administra por vía endovenosa).",
        VoF: "FALSO",
        categoria:  1
    },
    {
        pregunta: "El misoprostol solamente se usa para la realización de abortos inducidos.",
        respuesta: "El misoprostol es un medicamento esencial para la OMS. Se emplea para el tratamiento de la hemorragia postparto, para la inducción del parto y para el aborto médico y el posaborto (aborto incompleto, infectado, gestación detenida).",
        VoF: "FALSO",
        categoria:  5
    },
    {
        pregunta: "La mifepristona es un antagonista de la progesterona que detiene la gestación",
        respuesta: "Es importante saber que la mifepristona NO detiene la gestación. La mifepristona es un compuesto cuyo uso principal es la interrupción del embarazo. Se utiliza combinada con el misoprostol. Bloquea los receptores de progesterona en el útero, anulando su acción. Además, actúa a nivel miometrial incrementando la sensibilidad del músculo a la acción del misoprostol.",
        VoF: "FALSO",
        categoria:  5
    },
    {
        pregunta: "Durante la interrupción de la gestación con misoprostol se debe utilizar siempre la misma vía de administración.",
        respuesta: "Siempre debe utilizarse la misma vía de administración: sublingual, vaginal o bucal (yugal).",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "Los comprimidos de misoprostol se pueden usar igual, aunque el envase esté dañado.",
        respuesta: "No. Los daños en el envase pueden inactivar el misoprostol.",
        VoF: "FALSO",
        categoria:  5
    },
    {
        pregunta: "Antes de prescribir misoprostol para uso ambulatorio, es necesario asegurarse de que la usuaria cuente con las condiciones necesarias para acceder rápidamente a una guardia en caso de requerirlo.",
        respuesta: "Durante el tratamiento es importante estar estar en un lugar lo más cómodo posible y organizarse para no tener obligaciones También estar en compañía de una persona de confianza o asegurarse de contar con apoyo inmediato ante alguna complicación. Además, tener a mano números de contacto útiles ante una emergencia (incluyendo el de alguien que pueda trasladarla a una guardia). Carga y crédito en el celular y algo de dinero para transporte en caso de requerirlo. También es clave evitar sustancias que puedan alterar la percepción (como el alcohol y drogas), ya que pueden dificultar el reconocimiento de pautas de alarma.",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "El misoprostol y la mifepristona  son medicamentos esenciales según la OMS porque cubren las necesidades de atención de salud prioritarias de la población.",
        respuesta: "Ambos medicamentos están  en el listado de medicamentos esenciales de la OMS. Los medicamentos esenciales deben estar disponibles en todo momento, en la forma farmacéutica adecuada, con garantía de calidad y a precios que los particulares y la comunidad puedan pagar.",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "Cuando se usa misoprostol no se pueden usar analgésicos porque anulan su efecto",
        respuesta: "Los analgésicos deben indicarse sistemáticamente en el aborto médico (al igual que en el aborto quirúrgico). En lo posible, se deben entregar en mano (o, en su defecto, se debe dar la prescripción correspondiente), detallando por escrito cómo y cuándo tomarlos.",
        VoF: "FALSO",
        categoria:  5
    },
    {
        pregunta: "La mifepristona debe administrarse entre 24 y 48 antes del misoprostol ",
        respuesta: "El intervalo mínimo recomendado entre la administración de mifepristona y misoprostol es de 24 horas (recordar que la mifepristona aumenta la sensibilidad del útero al misoprostol y necesita al menos 24 horas para producir el efecto).",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "El aborto con medicamentos puede hacerse siempre en forma ambulatoria.",
        respuesta: "La atención integral para IVE/ILE debe brindarse en todos los niveles del sistema de salud. El aborto con medicamentos, es en general, un procedimiento de baja complejidad, que puede realizarse en el primer nivel de atención y en forma ambulatoria. La referencia a un nivel mayor, puede ser necesaria, en las siguientes situaciones:  1- Compromiso de salud que requiera supervisión médica; 2- Necesidad de conservar pruebas; 3- Etapas avanzadas de la gestación; 4- Limitaciones asociadas al contexto social, red de apoyo, distancia geográfica. Los centros de salud que no cuenten con el personal o equipamiento adecuado para realizar el procedimiento deben derivar dentro de los plazos previstos en la Ley 27.610.",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "El misoprostol puede utilizarse para el tratamiento médico del aborto incompleto. ",
        respuesta: "Para el tratamiento médico del aborto incompleto inferior a 14 semanas se sugiere el uso de 400 μg de misoprostol administrados por vía sublingual (dosis única). Para el tratamiento médico del aborto incompleto superior a 14 semanas se sugiere el uso de 400 μg de misoprostol administrado por vía sublingual, vaginal o bucal cada 3 horas hasta la expulsión.",
        VoF: "VERDADERO",
        categoria:  5
    },
    {
        pregunta: "El uso de misoprostol está contraindicado en personas con cesárea previa.",
        respuesta: "Los proveedores de salud deben ser cautelosos y utilizar su juicio clínico para decidir el número máximo de dosis de misoprostol en personas con incisión uterina previa. No se necesita ningún cambio en el régimen de aborto con medicamentos para las mujeres con una cicatriz uterina con gestaciónmenor de 22 a 24 semanas. La ruptura uterina es una complicación poco frecuente; el juicio clínico y la preparación del sistema de salud para la gestión de emergencia de la ruptura uterina deben considerarse en períodos gestacionales más avanzados.",
        VoF: "FALSO",
        categoria:  5
    },
    {
      pregunta: "Las cajas de emergencia deben guardarse bajo llave porque si se roban los elementos, no están disponibles cuando se necesitan",
      respuesta: "Las cajas de emergencia deben estar en lugares conocidos por todo el equipo y accesibles para su uso, ya que deben estar disponibles de manera inmediata cuando se necesitan.",
      VoF: "FALSO",
      categoria:  6
  },
  {
    pregunta: "Tener teléfonos y/o timbres en las habitaciones de las personas internadas es molesto e interrumpe las tareas del personal.",
    respuesta: "Es fundamental contar con sistemas rápidos y efectivos para solicitar asistencia. El pedido de ayuda es el primer paso para la atención de las emergencias y es clave en los primeros minutos. Todas las habitaciones deben contar con sistemas de llamada que funcionen (ej. timbres), y las alertas deben ser respondidas de manera inmediata (o a la brevedad).",
    VoF: "FALSO",
    categoria:  6
},
{
  pregunta: "El personal de enfermería siempre debe esperar la orden médica para actuar durante la emergencia. ",
  respuesta: "Según la OMS, el personal de enfermería (enfermeras, auxiliares de enfermería, enfermeras auxiliares) y obstétricas pueden realizar tratamiento médico del aborto incompleto sin complicaciones de menos de 1Lo4 semanas, y tratamiento inicial de la hemorragia y la infección posaborto que no ponen en peligro la vida.",
  VoF: "FALSO",
  categoria:  6
},
{
pregunta: "Para reducir el riesgo de secuelas graves y de muerte por aborto es imprescindible que los equipos se entrenen periódicamente en la atención de la emergencia.",
respuesta: "Es conveniente optar por entrenar a los equipos de salud mediante simulacros anuales de los protocolos de emergencia. Los roles de cada persona deberán estar previa y claramente asignados para la acción en los diferentes niveles de la red de cuidados. Disponer también de algoritmos de pared con los protocolos a seguir.",
VoF: "VERDADERO",
categoria:  6
},
{
pregunta: "En la hemorragia postaborto siempre se deben colocar rápidamente una o dos vías periféricas de grueso calibre.",
respuesta: "Colocar 2 vías venosas periféricas percutáneas, calibre 16-18. ",
VoF: "VERDADERO",
categoria:  6
},
{
pregunta: "Tanto el misoprostol como la AMEU pueden estar disponibles en los lugares con menor complejidad.",
respuesta: "Son intervenciones seguras, simples y eficaces, basadas en la evidencia y que pueden ser realizadas por personal no médico capacitado cuando existen los permisos legales correspondientes. Es necesario asegurar sistemáticamente la actuación inmediata y correcta ante la presentación de una emergencia.",
VoF: "VERDADERO",
categoria:  6
},
{
pregunta: "para la atención durante la emergencia es imprescindible contar con un sistemas y herramientas para comunicación efectiva entre efectores de distinta complejidad ",
respuesta: "Es clave contar con una Red de cuidados y de derivación acordada y conocida por todo el personal para eventuales emergencias cuando el procedimiento se realice en un centro de menor complejidad. Los sistemas de comunicación y traslado, así como la comunicación efectiva son imprescindibles para la referencia y asesoramiento entre los diferentes niveles de la red de salud. Hay que estar SIEMPRE ATENTA y PREPARADA para la emergencia.",
VoF: "VERDADERO",
categoria:  6
},
{
pregunta: "Durante la emergencia debemos concentrarnos en la tarea de asistir a la usuaria, y no hay tiempo que perder hablando con la mujer ni con la familia, que debe quedarse afuera para no molestar.",
respuesta: "La atención de las emergencias incluye además la consideración de los derechos de la persona usuaria como atributo de calidad. Los derechos deben ser garantizados en todas las circunstancias.",
VoF: "FALSO",
categoria:  6
}

]


export function Amarillo({stateAmeu, state2, state3, state4, state5, state6, clickeoequiponaranja, clickeoequiporojo, clickeoequipoazul, clickeequipoverde, clickeequiponegro}) {
    const [estadoModal2, cambiarEstadoModal2] = useState(false)
    const [index, setIndex] = useState(0);

    const [estadoModal3, cambiarEstadoModal3] = useState(false)

    // ALGORITMO TARJETAS AMARILLAS
  function todosamarillo(){
    changeAmarillo();
    abrirmodal2();

  }

  let categoriaAmeu = Arrayamarillo[index].categoria


if(stateAmeu === true){
  if (categoriaAmeu === 1){
    changeAmarillo()
  }
}

if(state2 === true){
  if (categoriaAmeu === 2){
    changeAmarillo()
  }
}

if(state3 === true){
  if (categoriaAmeu === 3){
    changeAmarillo()
  }
}

if(state4 === true){
  if (categoriaAmeu === 4){
    changeAmarillo()
  }
}

if(state5 === true){
  if (categoriaAmeu === 5){
    changeAmarillo()
  }
}

if(state6 === true){
  if (categoriaAmeu === 6){
    changeAmarillo()
  }
}


  function changeAmarillo() {
    
    var newIndex = Math.floor(Math.random() * (Arrayamarillo.length - 0) + 0); 
    setIndex(newIndex);
  }




  function VerRespuesta(){
    cerrarmodal2();
    mostrarRespuesta();
  }

  function abrirmodal2(){
    cambiarEstadoModal2(!estadoModal2)
  }


  function cerrarmodal2(){
    cambiarEstadoModal2(false)
  }

  function mostrarRespuesta(){
    cambiarEstadoModal3(!estadoModal3)
  }


  const audio = new Audio(sonidocarta)

  function abrirysonar(){
    todosamarillo();
    audio.play()
  }
    return (
        <>
        <button className="btnamarillo" onClick={abrirysonar}><p className="nombreboton">VERDADERO O FALSO</p><FaCheck/> <FaTimes/> </button>

        <ModalAmarillo
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo="Verdadero o falso"
        
      >
        <Contenido>
          <h1>{Arrayamarillo[index].pregunta}</h1>
          <button onClick={VerRespuesta}>Respuesta</button>

        </Contenido>
      </ModalAmarillo>

      <ModalAmarilloRespuesta
              estado={estadoModal3}
              cambiarEstado3={cambiarEstadoModal3}>
        <Contenido>
            <h1>{Arrayamarillo[index].VoF}</h1>
            <p>{Arrayamarillo[index].respuesta}</p>

            <div className="botonespuntos">
              <button className="equiponaranja" onClick={clickeoequiponaranja}>+1</button>
              <button className="equiporojo" onClick={clickeoequiporojo}>+1</button>
              <button className="equipoazul" onClick={clickeoequipoazul}>+1</button>
              <button className="equipoverde" onClick={clickeequipoverde}>+1</button>
              <button className="equiponegro" onClick={clickeequiponegro}>+1</button>
            </div>
        </Contenido>
      </ModalAmarilloRespuesta>


        </>
    )
}


const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #d2d445;
    text-transform: uppercase;
    text-align: center;
  }

  p{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    @media (max-width: 1056px) {
      font-size: 15px;
    }

    @media (max-width: 907px) {
    font-size: 15px
    }
  }

  .nombreboton{
    font-size: 1vw;
  
  }

  button{
    -webkit-border-radius: 44;
  -moz-border-radius: 44;
  border-radius: 44px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #d2d445;
  padding: 10px 20px 10px 20px;
  border: solid #d2d445 2px;
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