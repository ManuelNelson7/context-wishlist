import React, { useEffect } from 'react'
import Tarea from '../components/Tarea'

const Lista = () => {
  return (
    <div className='flex md:justify-center'>
      <Tarea
        titulo="Tarea 1"
        prioridad="alta"
        status="pendiente"
      />
    </div>
  )
}

export default Lista