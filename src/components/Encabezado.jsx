import React from 'react'

const Encabezado = ({tituloencabezado}) => {
  return (
    <div className='w-full bg-slate-400'>
      <div className='flex max-w-screen-lg h-[300px] mx-auto justify-center'>
        <h1 className='uppercase text-6xl my-auto'>{tituloencabezado}</h1>
      </div>      
    </div>
  )
}

export default Encabezado