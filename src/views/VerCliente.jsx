import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const VerCliente = () => {
  const { id } = useParams()
  const [cliente, setCliente] = useState({})
  const [cagando, setCagando] = useState(false)

  useEffect(() => {
    setCagando(!cagando)
    const obtenerClientesApi = async () => {
      try {
        const url = `http://localhost:3000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)

      } catch (error) {
        console.log(`no puede ser por que a mi diosito!! ${error}`)
      }
      setCagando(false)
    }
    obtenerClientesApi()
  }, [])
  return (

    <div>

      {cagando ? 'CAGANDO...' : (
        <>
          <div className="flex w-full justify-center">
            <h1 className='font-black text-4xl text-blue-900 '>Cliente: {cliente.nombre}</h1>

          </div>
          <p className='mt-10 pl-32 md:w-3/4 text-2xl text-blue-700 font-bold'>Información del cliente </p>

          <div className='bg-white mt-10 px-5 py-10 rounded-xl shadow-lg md:w-3/4 mx-auto'>

            <p className="text-gray-500 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold  ">
                Cliente:
              </span> {cliente.nombre}</p>
            <p className="text-gray-500 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold  ">
                Empresa:
              </span> {cliente.empresa}</p>
            <p className="text-gray-500 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold  ">
                E-mail:
              </span> {cliente.email}</p>
            {cliente.telefono && (
              <p className="text-gray-500 mt-4 text-2xl">
                <span className="text-gray-700 uppercase font-bold  ">
                  Teléfono:
                </span> {cliente.telefono}</p>
            )}
            {cliente.notas && (

              <p className="text-gray-500 mt-4 text-2xl">
                <span className="text-gray-700 uppercase font-bold  ">
                  Notas:
                </span> {cliente.notas}</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default VerCliente