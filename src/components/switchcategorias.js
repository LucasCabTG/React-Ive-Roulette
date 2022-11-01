import React, { useState } from "react";
import "../styles/switchcategorias.css"

export function SwitchCategoria({name, checked, setChecked, }) {

    return (
        <>
            <input
                name= {name}
                type='checkbox'
                checked={ checked }
                onChange={ setChecked }
                />
            <label>{name}</label>
        </>
    )
}
