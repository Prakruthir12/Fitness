import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <header className='flex items-center justify-between bg-blue-900 text-white p-5'>
        <div className='logo'>
            <Link to='/' className='font-bold text-xl md:tetx-2xl lg:text-3xl'>
                <h2>Fitness Cube</h2>
            </Link>
        </div>
        <nav>
            <ul className='flex'>
                <li className='mr-5 lg:text-lg'>
                    <button>
                        <Link to="/">Home</Link>   
                    </button>
                </li>
                <li className='lg:text-lg'>
                    <button>
                        <Link to="/aboutus">About Us</Link>
                    </button>
                </li>
            </ul>
        </nav>   
    </header>
  )
}

export default header