import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./styles/ruleta.css";
import sonidoruleta from "./sounds/sonidoruleta.mp3"



export function Roulette() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const data = [
  { option: "NOMBRAR EN UN MINUTO" },
  { option: "VERDADERO O FALSO" },
  { option: "DÍGALO CON MÍMICA" },
  { option: "PRENDA"  }
];


  const audio = new Audio(sonidoruleta)

  function girarysonar(){
    handleSpinClick();
    audio.play()
  }


  
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    };
    return (
        <div>
          <div className="containerruleta">
            <Wheel className="ruedaindex"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={["#f2f2f2"]}
        outerBorderWidth={[10]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[1]}
        fontSize={0}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#009E3D",
          "#d2d445",
          "#0069B4",
          "#F18700"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      </div>
      <div className="containerboton">
      <button className="botongirar" onClick={girarysonar}>GIRAR</button>
      <div id="cartelito" className="resultado-ruleta">{!mustSpin ? data[prizeNumber].option : "GIRANDO..."}</div>
      
      </div>
        </div>
    )
}
