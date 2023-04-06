import React from 'react';
import '../components/welcome.css'
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  function rename(e) {
    setname(e.target.value);
  }
  function handleNext() {
    navigate('/options', { state: { name: name } });
  }
  
  return (
    <div>
        <div className='flex flex-col text-center'>
            <table className='mm'>
                <tr className='ww'><br/>
                  <br/><p className='font-bold text-4xl'>What's your name?</p><br/>
                  <p>We’re happy you’re here.</p>
                  <p>Let’s get to know a little about you.</p><br/>
                  <input type='text' placeholder='Enter your name' onChange={rename}/><br/>
                  <br/>
                  <button>
                      <Link to='/' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                      border-2 border-black transitin-all duration-500 hover:text-black font-bold mr-5'>
                      Back
                      </Link>
                  </button>
                  <button onClick={handleNext}>
                      <Link to='/options' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                      border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                      Next
                    </Link>
                  </button>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default Welcome;