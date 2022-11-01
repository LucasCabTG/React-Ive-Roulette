import "../styles/equipospuntuadorfinal.css"

export function PuntuadorFinal({cajapuntos, nombreequipo, nombredelequipo, puntosequipo}) {
    return (
        <div className="equipospuntuadorfinal">
            <div className={cajapuntos}>{puntosequipo}</div>
            <div className={nombreequipo}>{nombredelequipo}</div>
        </div>
    )
}
