import React from 'react'
import "../styles/puntuador.css"

export function BotonContador({ texto, puntopositivo, clickeo }) {
    return (
        <div>
            <button
            className={puntopositivo ? "botonpositivo" : "boton-reiniciar"}
            onClick={clickeo}>
                {texto}
            </button>
        </div>
    )
}
