import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const Formulario = ({ cliente, cargando }) => {

  const navigate = useNavigate()
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string().min(3, 'la tienes muy corta').max(20, 'tampoco te pases de verga').required('el Nombre del Cliente es Obligatorio'),
    empresa: Yup.string().required('favor de escribir el nombre de la empresa'),
    email: Yup.string().required('Este campo es obligatorio').email('favor de proporcionar un E-mail válido'),
    telefono: Yup.string().matches(/^[0-9]+$/, 'Solo ingresar números sin letras o caractéres espaciales').
      min(10, 'el número debe ser mínimo de 10 dígitos máximo de 13').max(13, 'el número debe ser mínimo de 10 dígitos máximo de 13'),
    notas: Yup.string().max(300, 'longitud máxima de las notas es de 300 caracteres')
  })

  const handleSubmit = async (valores) => {
    try {
      if (cliente.id) {
        const url = `http://localhost:3000/clientes/${cliente.id}`
        const respuesta = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
      else {
        const url = "http://localhost:3000/clientes"
        const respuesta = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
      // const resultado = await respuesta.json()

      navigate('/clientes')
    } catch (error) {
      console.log('haaaa pánico')
    }
  }



  return (
    <>
      {cargando ? 'Cagando' : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-lg md:w-3/4 mx-auto'>
          <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
            {cliente.nombre ? "Editar cliente" : "Agregagar Clicliente"} </h1>
          <Formik
            initialValues={{
              nombre: cliente?.nombre ?? "",
              empresa: cliente.empresa ? cliente.empresa : '',
              // los dos anteriores son equivalentes 
              email: cliente?.email ?? "",
              telefono: cliente?.telefono ?? "",
              notas: cliente?.notas ?? "",


            }}
            enableReinitialize={true}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values)
              resetForm()
            }}
            validationSchema={nuevoClienteSchema}
          >
            {({ errors, touched }) => (

              <Form
                className='"mt-10'
              >
                <div className='mb-4'>
                  <label className='text-gray-800  ' htmlFor="nombre">Nombre:</label>
                  <Field
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p3 bg-gray-50 border-blue-900 border-2 rounded-md"
                    placeholder="   Nombre del cliente"
                    name="nombre"
                  />
                  {errors.nombre && touched.nombre ? (
                    <div className="text-center my-4 bg-red-600 text-white font-black p-3 uppercase">
                      {errors.nombre}
                    </div>

                  ) : null}

                </div>
                <div className='mb-4'>
                  <label className='text-gray-800  ' htmlFor="empresa">Empresa:</label>
                  <Field
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p3 bg-gray-50 border-blue-900 border-2 rounded-md"
                    placeholder="   Nombre de la empresa"
                    name="empresa"

                  />
                  {errors.empresa && touched.empresa ? (
                    <div className="text-center my-4 bg-red-600 text-white font-black p-3 uppercase">
                      {errors.empresa}
                    </div>

                  ) : null}

                </div>
                <div className='mb-4'>
                  <label className='text-gray-800  ' htmlFor="email">E-mail:</label>
                  <Field
                    id="email"
                    type="email"
                    className="mt-2 block w-full p3 bg-gray-50 border-blue-900 border-2 rounded-md"
                    placeholder="   E-mail del cliente"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-center my-4 bg-red-600 text-white font-black p-3 uppercase">
                      {errors.email}
                    </div>

                  ) : null}

                </div>
                <div className='mb-4'>
                  <label className='text-gray-800  ' htmlFor="telefono">Teléfono:</label>
                  <Field
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p3 bg-gray-50 border-blue-900 border-2 rounded-md"
                    placeholder="   Número de teléfono"
                    name='telefono'
                  />
                  {errors.telefono && touched.telefono ? (
                    <div className="text-center my-4 bg-red-600 text-white font-black p-3 uppercase">
                      {errors.telefono}
                    </div>

                  ) : null}

                </div>
                <div className='mb-4'>
                  <label className='text-gray-800  ' htmlFor="notas">Notas:</label>
                  <Field
                    as='textarea'
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p3 bg-gray-50 border-blue-900 border-2 rounded-md h-40"
                    placeholder="   Notas importantes"
                    name='notas'
                  />
                  {errors.notas && touched.notas ? (
                    <div className="text-center my-4 bg-red-600 text-white font-black p-3 uppercase">
                      {errors.notas}
                    </div>

                  ) : null}

                </div>

                <input
                  type="submit"
                  value={cliente.nombre ? "Guardar cambios" : "Agregar Cliente"}
                  className='mt-5 w-full bg-blue-900 text-white rounded-lg shadow-lg shadow-black font-bold text-xl p-5 cursor-pointer'
                />


              </Form>
            )}
          </Formik>
        </div>
      )
      }
    </>
  )
}
Formulario.defaultProps = {
  cliente: {},
  cargando: false
}

export default Formulario 