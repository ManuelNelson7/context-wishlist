import React, { useEffect, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import Tarea from '../components/Tarea'

const Lista = () => {
  const { tareas } = useContext(AppContext)

  return (
    <div className='flex md:justify-center'>
      <div className='flex flex-col gap-2 w-full md:items-center'>
        {tareas.map(tarea => (
          <Tarea key={tarea.id} {...tarea} />
        ))}

      </div>
    </div>
  )
}

export default Lista