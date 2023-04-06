import React from 'react'
import { Link } from 'react-router-dom'

export default function error() {
  return (
     <section >
      <center>
      <h1 className='uppercase font-bold text-4xl tracking-wider mb-10 mt-5
      md:text-6xl'>
        Error 404 | Page Not Found
      </h1>
        <button>
      <Link to='/' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
        border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
        Back to Home Page
      </Link>
      </button>
        </center>
     </section>
  )
}
