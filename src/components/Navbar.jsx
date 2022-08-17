import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='w-screen fixed top-0 left-0 bg-gray-900 flex justify-center'>
            <div className='flex justify-between items-center w-11/12 py-4'>
                <Link to="/">
                    <a className='font-semibold text-white'>miLista</a>
                </Link>
                <Link to="/crear">
                    <a>
                        <BsFillPlusCircleFill className='text-white text-xl' />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar