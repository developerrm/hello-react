import React from 'react'

export default function CarruselImag({url}) {
  return (
    <div className="card" style={{width: '18rem;'}}>
    <img src={url} className="card-img-top" alt="..."/>
  {/* <div class="card-body"> */}
    {/* <h5 class="card-title">Card title</h5> */}
    {/* <a href="#" class="btn btn-primary">Me gusta</a> */}
  {/* </div> */}
    </div>
  )
}
