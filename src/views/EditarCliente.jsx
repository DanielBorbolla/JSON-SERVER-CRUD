import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Formulario from '../components/Formulario'


const EditarCliente = () => {
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
    <>
      <div className="flex w-full justify-center">
        <h1 className='font-black text-4xl text-blue-900 '>Editar  Cliente</h1>

      </div>
      <p className='mt-10 pl-32 md:w-3/4 text-2xl text-blue-700 font-bold'>Realiza los cambios deseados del cliente</p>
      {cliente.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cagando} />)
        : (<div> 404 cliente no encontrado</div>)}
    </>
  )
}

export default EditarCliente