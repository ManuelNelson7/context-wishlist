import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

const Tarea = ({ titulo, prioridad, status, id }) => {
    return (
        <div className='flex w-full bg-gray-200 px-2 items-center justify-between py-3 rounded-lg'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-gray-900'>{titulo}</h1>
                <p className={`bg-red-400 w-fit px-2 py-0.5 rounded-lg text-white' ${prioridad == 'alta' ? 'bg-red-200' : 'bg-yellow-200'}`}>Prioridad {prioridad}</p>
                <p className={`w-fit px-2 py-0.5 rounded-lg text-gray-900 ${status == 'pendiente' ? 'bg-orange-200' : 'bg-green-200'}`}>
                    {status}
                </p>
            </div>

            <button
                onClick={() => { console.log("Tarea completada") }}
            >
                <BiCheckCircle className='text-5xl text-sky-700' />
            </button>

        </div >
    )
}

export default Tarea