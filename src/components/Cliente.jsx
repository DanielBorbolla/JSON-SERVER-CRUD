import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cliente = ({ cliente, handleDelete }) => {
  const navigate = useNavigate()
  const { nombre, empresa, email, telefono, notas, id } = cliente
  return (
    <tr className=' hover:bg-gray-100 border'>
      <td className='p-3'>{nombre}</td>
      <td className='p-3'>
        <p><span className='text-gray-800 uppercase font-bold'>E-mail:  </span>{email}</p>
        <p><span className='text-gray-800 uppercase font-bold'>Tel:  </span>{telefono}</p>

      </td>
      <td className='p-3'>{empresa}</td>
      <td className='p-3'>
        <button className="bg-green-600 hover:bg-green-800  block  w-full text-white uppercase font-bold mt-5" type='button' onClick={() => navigate(`/clientes/${id}`)}>Ver</button>
        <button className="bg-blue-600 hover:bg-blue-800  block  w-full text-white uppercase font-bold mt-5" type='button' onClick={() => navigate(`/clientes/editar/${id}`)}>Editar</button>
        <button className="bg-red-600 hover:bg-red-800  block  w-full text-white uppercase font-bold mt-5" type='button' onClick={() => handleDelete(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente
