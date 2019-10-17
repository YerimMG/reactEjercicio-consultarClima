import React, {useState} from 'react'

 function Formulario({datosConsulta}) {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })


  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [ e.target.name] : e.target.value
    })
  }

  const consultarClima = (e) => {
    e.preventDefault();
    datosConsulta(busqueda)
  }

  return (
    <form
    onSubmit={consultarClima}
    >

      <div className='input-field col s12'>
        <input 
        type="text"
        name="ciudad"
        id="ciudad"
        onChange={handleChange}
        />
        <label htmlFor="ciudad"> Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" onChange={handleChange}>
          <option value="">Select</option>
          <option value="MX">MEX</option>
          <option value="US">USA</option>
        </select>
      </div>
      
      <div className='input-field col s12'>
        <input 
        type="submit"
        className="waves-effect waves-light btn-large btn-block yellow accent-4"
        value='Buscar'
        />
      </div>


    </form>
  )
}

export default Formulario