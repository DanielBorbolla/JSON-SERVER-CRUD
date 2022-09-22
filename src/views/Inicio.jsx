import React, { useState, useEffect } from 'react'
import Cliente from '../components/cliente'

const Inicio = () => {

  const [clientes, setClientes] = useState([])
  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = "http://localhost:3000/clientes"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setClientes(resultado)

      } catch (error) {
        console.log(`no puede ser por que a mi diosito!! ${error}`)
      }
    }
    obtenerClientesApi()
  }, [])
  const handleDelete = async id => {
    const confirmar = confirm('¿Deseas que este cliente sea eliminado de la faz de tu lista?')
    if (confirmar) {
      try {
        const url = `http://localhost:3000/clientes/${id}`
        const respuesta = await fetch(url, {
          method: 'DELETE'
        })
        await respuesta.json()
        const arrayClientes = clientes.filter(cliente => cliente.id !== id)
        setClientes(arrayClientes)
      } catch (error) {
        console.log(error)
      }
      return
    }
  }
  return (
    <>
      <div className="flex w-full justify-center">
        <h1 className='font-black text-4xl text-blue-900 '>Clientes</h1>

      </div>
      <p className='mt-10  md:w-3/4 text-2xl text-blue-700 font-bold'>Administra tus clientes </p>

      <table className='w-full mt-5 table-auto shadow-lg bg-white'>
        <thead className='bg-blue-900 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (<Cliente
            key={cliente.id}
            cliente={cliente}
            handleDelete={handleDelete} />))}

        </tbody>
      </table>
    </>
  )
}

export default Inicio