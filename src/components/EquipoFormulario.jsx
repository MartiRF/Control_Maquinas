export const EquipoFormulario = () => {
  return (
    <>
      <div className="w-full h-full p-3 flex flex-col items-center md:items-start md:my-3 md:w-screen">
        <h1 className="text-2xl text-justify">Registro de Equipo</h1>
        <form action="" className="flex flex-col items-center w-full md:w-screen md:items-start">
          <div className="w-full md:flex md:gap-6">
            <div className="w-full md:w-1/3">
              <label>Cliente</label>
              <input type="text" required />
            </div>
            <div>
              <label>Tipo de Equipo</label>
              <div className="relative w-full">
                <select name="tipo_equipo">
                  <option value="laptop">Laptop</option>
                  <option value="computadora">Computadora</option>
                  <option value="impresora">Impresora</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:justify-start md:gap-6">
            <div className="md:w-1/3">
              <label >Marca</label>
              <input type="text" />
            </div>
            <div>
              <label >Modelo</label>
              <input type="text" />
            </div>
          </div>
          <label>Descripcion de Equipo</label>
          <textarea name="descripcion_equipo" cols="30" rows="10"></textarea>
          <label>Descripcion de falla</label>
          <textarea name="descripcion_falla" cols="30" rows="10"></textarea>
          <div className="md:flex my-2 md:justify-center md:1/2  md:gap-7 md:items-center">
            <label >Tipo de Pago</label>
            <div className="relative w-full">
              <select name="tipo_de_pago">
                <option value="efectivo">Efectivo</option>
                <option value="factura">Factura</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <label >Sucursal de entrada</label>
            <div className="relative w-full">
              <select name="tipo_de_pago">
                <option value="sucursal_av_puebla">Av. Puebla</option>
                <option value="sucursal_bulevar">Bulevar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div>
            <button className="btn_primary" type="submit">Registrad</button>
            <button className="btn_danger" type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  )
}