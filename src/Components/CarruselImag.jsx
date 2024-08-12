

import React from 'react'

export default function CarruselImag({url, alt}) {
 
  return (
    <div className="card" >
      <a href={url} style={{textDecoration:"none"}}>
    <img width={100}  src={url} alt={alt}/>
      </a>
    </div>
   )
}
