import React from 'react'
import { Link } from 'react-router-dom'


function home() {
  return (
    <div>
      <section className='flex flex-col items-center 
      justify-center text-center h-screen'>
        <bold className='center1'>
            <h1 className='uppercase font-bold text-4xl tracking-wider mb-5'>Fitness Cube</h1>
            <p>Push harder than yesterday if you want a different tomorrow</p><br/>
            <button>
              <Link to='/welcome' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
              border-2 border-black transitin-all duration-500 hover:text-black font-bold mr-5'>
                Lets Go!
              </Link>
            </button>
            <button>
              <Link to='/know' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
              border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                Know More
              </Link>
            </button>
        </bold>
      </section>
    </div>
  )
}

export default home