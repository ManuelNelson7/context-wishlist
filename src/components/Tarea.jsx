import React, { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { BiCheckCircle } from 'react-icons/bi'

const Tarea = ({ titulo, prioridad, status, id }) => {
    const { deleteTarea, updateTarea } = useContext(AppContext)

    return (
        <div className='flex w-full md:max-w-xl bg-gray-200 px-2 items-center justify-between py-3 rounded-lg'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-gray-900'>{titulo}</h1>
                <p className={`bg-red-400 w-fit px-2 py-0.5 rounded-lg text-white' ${prioridad == 'alta' ? 'bg-red-200' : 'bg-yellow-200'}`}>Prioridad {prioridad}</p>
                <p
                    className={`w-fit px-2 py-0.5 rounded-lg cursor-pointer text-gray-900 ${status == 'pendiente' ? 'bg-orange-200' : 'bg-green-200'}`}
                    onClick={() => updateTarea(id, status)}
                >
                    {status}
                </p>
            </div>

            <button
                onClick={() => { deleteTarea(id) }}
            >
                <BiCheckCircle className='text-5xl text-sky-700' />
            </button>

        </div >
    )
}

export default Tarea