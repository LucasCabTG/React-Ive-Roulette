import React from "react"
import "../styles/puntuador.css"

export function Contador({ numPuntos, estiloContador }) {
    return (
        <div>
            <div className={estiloContador}>
                {numPuntos}
            </div>
        </div>
    )
}
