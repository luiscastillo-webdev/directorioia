import React from 'react'
import Plantilla from './Plantilla';
import Data from './Data';

const Video = ({id,img,nombre,url,descrip,categoria,bgdestacado,pago,busqueda}) => {
    

let buscar = []
if(!busqueda){
    buscar = Data.filter(c=>c.categoria==='Audio/Video')  
}else{
 buscar = itemContenido.filter((dato) =>
    dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
    dato.categoria.toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
    dato.pago.toLowerCase().includes(busqueda.toLocaleLowerCase())
     
  )
  
}
  return (
     <>
    <div className='flex flex-col'>  
    <Plantilla
      buscar={buscar}
      id={id}
      img={img}
      nombre={nombre}
      url={url}
      descrip={descrip}
      categoria={categoria}
      bgdestacado={bgdestacado}
      pago={pago}    
    /> 
    </div>
    </>  
  )
}

export default Video