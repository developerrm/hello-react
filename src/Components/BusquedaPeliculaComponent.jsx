import React, { useState } from "react"

export default function BusquedaPeliculaComponent({eventHandlerBuscar}) {

    const [text,setText] = useState()
    const textOnChange = (event) => {
        setText(event.target.value);
        eventHandlerBuscar(text);
    }
    const BuscarPelicula = () =>{ 
        eventHandlerBuscar(text);
    }
    return (
    <div>        
        <div style={{display:"flex", flexDirection: "row", gap:"10px" }} >
        <input type="text" value={text} onChange={textOnChange} style={{width:"80%", height:"20px"
        }}  placeholder="Quiero ver..."/>
        <button style={{height:"25px"}} onClick={BuscarPelicula}>Buscar</button>
        </div>
    </div>
  )
}
