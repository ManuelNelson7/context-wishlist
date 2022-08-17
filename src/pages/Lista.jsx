import React from 'react'
import Tarea from '../components/Tarea'

const Lista = () => {
  return (
    <div>
        <Tarea
            titulo="Tarea 1"
            prioridad="alta"
            status="pendiente"
         />
    </div>
  )
}

export default Lista