import React from 'react'
import Formulario from '../components/Formulario'
const NuevoCliente = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <h1 className='font-black text-4xl text-blue-900 '>Nuevo Cliente</h1>

      </div>
      <p className='mt-10 pl-32 md:w-3/4 text-2xl text-blue-700 font-bold'>Llena los siguientes campos para registrar un cliente </p>
      <Formulario />
    </>
  )
}

export default NuevoCliente