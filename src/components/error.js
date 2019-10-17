import React from 'react'

export default function error({mensaje}) {
  return (
    <div className='card-panel red darken-4 error col s12'>
      {mensaje}
    </div>
  )
}
