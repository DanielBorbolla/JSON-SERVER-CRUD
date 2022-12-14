import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  const actualPath = location.pathname
  return (
    <div className="md:flex md:min-h-screen bg-blue-100">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10" >
        <h2 className="text-4xl 
                      font-black
                      text-center
                    text-white">CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link className={`text-2xl block mt-2 hover:text-blue-200 ${actualPath === '/clientes' ? ' underline text-blue-200' : 'text-white '}`} to="/clientes">{`Clientes ${actualPath === '/clientes' ? '<=' : ''}`}</Link>
          <Link className={`text-2xl block mt-2 hover:text-blue-200 ${actualPath === '/clientes/nuevo' ? ' underline text-blue-200' : 'text-white '}`} to="/clientes/nuevo">{`Nuevo Cliente ${actualPath === '/clientes/nuevo' ? '<=' : ''}`}</Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll" >
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
