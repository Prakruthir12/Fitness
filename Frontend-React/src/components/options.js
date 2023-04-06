import React from 'react';
import '../components/rough.css'
import { Link, useLocation } from 'react-router-dom';

export default function Options(){
  const location = useLocation(); 
  const name = location.state && location.state.name; 

  return (
    <div>
        <div className='flex flex-col text-center'>
            <table className='mm'>
                <tr className='ww'><br/>
                    <br/><p className='font-bold text-xl' >Thanks {name}! Now for your goals.</p>
                    <p>Select that is important to you, including one weight goal.</p><br/><br/>
                    <button class="button">
                      <Link to='/bmr' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                      border-2 border-black transitin-all duration-500 hover:text-black font-bold '>
                      BMI Calculator
                      </Link>
                    </button><br/><br/><br/>
                    <button class="button">
                        <Link to='/calorie' className='py-2 px-3 rounded shadow text-white bg-black hover:bg-transparent
                        border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                        Calorie Calculator
                        </Link>
                    </button><br/><br/><br/>
                    <button class="button">
                      <Link to='/' className='py-2 px-16 rounded shadow text-white bg-black hover:bg-transparent
                      border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                      Back
                      </Link>
                    </button><br/>
                </tr>
            </table>
        </div>
    </div>
  );
}