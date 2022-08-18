import React, { useState, useContext } from 'react'
import { AppContext } from '../components/AppContext'

const Crear = () => {
    const { addTarea } = useContext(AppContext)
    const [titulo, setTitulo] = useState('')
    const [prioridad, setPrioridad] = useState('alta')

    const onSubmit = (e) => {
        e.preventDefault()
        addTarea(titulo, prioridad)
        setTitulo('')
        setPrioridad('alta')
    }

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-xl font-semibold text-blue-800'>Crear tarea</h2>

            <form onSubmit={onSubmit} className="w-full md:max-w-xl px-2 mt-4 bg-gray-200 py-4 rounded-lg">
                <div className='flex flex-col gap-2'>

                    <label htmlFor="titulo" className='font-semibold text-gray-900'>Titulo</label>
                    <input
                        type='text'
                        placeholder='¿Qué quieres hacer?'
                        className='w-full px-2 py-0.5 rounded-lg border-2 border-blue-300 text-gray-900'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />

                    <label htmlFor="prioridad" className='font-semibold mt-4 text-gray-900'>Prioridad</label>
                    <select
                        className='w-fit px-2 py-0.5 rounded-lg bg-white text-gray-900'
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    >
                        <option value='alta'>Alta</option>
                        <option value='normal'>Normal</option>
                    </select>
                </div>

                <button className='mt-5 px-4 py-0.5 bg-teal-500 rounded-lg text-white'>
                    Crear
                </button>
            </form>
        </div>
    )
}

export default Crear