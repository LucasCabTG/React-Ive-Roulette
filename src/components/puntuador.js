import React, {useState} from "react"
import { BotonContador } from "./botoncontador"
import { Contador } from "./Contador"
import "../styles/puntuador.css"

export function Puntuador({estiloPuntos, clickeo, reiniciarclickeo, numPuntos}) {

    return (
        <div className="contenedor-puntos">
            <Contador numPuntos={numPuntos} estiloContador={estiloPuntos} />
            <div className="contenedor-botones">
            <BotonContador
            texto="+"
            puntopositivo={true} 
            clickeo={clickeo}/>
            <BotonContador
            texto="-"
            puntopositivo={false}
            clickeo={reiniciarclickeo} />
            </div>

        </div>

    )
}
