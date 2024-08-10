import React, { useState } from "react"

export default function Componente() {

    const [text,setText] = useState()
    const [textUpdated,setTextUpdated] = useState()
    const textOnChange = (event) => {
        setText(event.target.value)
    }
     const btnActualizar_Click = () => {
        setTextUpdated(text);
     }

    return (
    <div>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={btnActualizar_Click}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto Actualizado: {textUpdated}</p>

    </div>
  )
}
