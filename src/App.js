import React, { useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components//error'
import Clima from './components/Clima'

function App() {
  const [ciudad, guardarCiudad] = useState('')
  const [pais, guardarPais] = useState('')
  const [error, guardarError] = useState(false)
  const [resultado, guardarResul] = useState({})
  
  useEffect(() => {

    if ( ciudad === '') return
    const consultarApi = async () => {

      let key = process.env.key
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado)
      guardarResul(resultado)
  
    }
    consultarApi()
  }, [ ciudad, pais ])

  const datosConsulta = datos => {
    // console.log(datos)
    if (datos.ciudad === '' || datos.pais === ""){
      guardarError(true)
      return
    }  
    guardarCiudad(datos.ciudad)
    guardarPais(datos.pais)
    guardarError(false)
  }
 

  //CARGAR UN COMPONENTE
  let componente;
  if (error){
    componente = <Error mensaje='Se nesecitan todos los campos'/>
  } else if (resultado.cod === "404") {
    componente = <Error mensaje='No Encuentro la ciudad'/>
  } else {
    componente = <Clima resultado= {resultado}/>
  }

  return (
    <div className="App">
        <Header
        titulo='Clima React'
        />
        <div className="contenedor-form">
          <div className='container'>
            <div className='row'> 
              <div className='col s12 m6'>
                <Formulario
                datosConsulta = {datosConsulta}
                />
              </div>
              <div className='col s12 m6'>
                {componente}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
