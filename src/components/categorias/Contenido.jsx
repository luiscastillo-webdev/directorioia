import React from 'react'
import Data from './Data';
import Plantilla from './Plantilla';
 

const Contenido = ({busqueda,id,img,nombre,url,descrip,categoria,bgdestacado,pago}) => {

let buscar = []
if(!busqueda){
    buscar = Data.filter(c=>c.categoria==='Contenido') 
}else{
 buscar = Data.filter((dato) =>
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

export default Contenido