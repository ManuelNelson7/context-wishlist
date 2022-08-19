import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [tareas, setTareas] = useState(localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [])

    useEffect(() => {
        console.log(tareas)
    }, [tareas])

    const addTarea = (titulo, prioridad) => {
        const id = tareas.length + 1
        const newTarea = {
            id,
            titulo,
            prioridad,
            status: 'pendiente'
        }
        setTareas([...tareas, newTarea])
    }

    const deleteTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }

    const updateTarea = (id, status) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id && status === 'pendiente') {
                return { ...tarea, status: 'en proceso' }
            }
            if (tarea.id === id && status === 'en proceso') {
                return { ...tarea, status: 'pendiente' }
            }
            return tarea
        }
        ))
    }

    useEffect(() => {
        if (tareas.length > 0) {
            localStorage.setItem('tareas', JSON.stringify(tareas))
        }
    }, [tareas])

    return (
        <AppContext.Provider
            value={{
                tareas,
                addTarea,
                deleteTarea,
                updateTarea
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider