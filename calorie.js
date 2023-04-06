import { useState } from 'react';
import '../components/bmr.css';
import { Link } from 'react-router-dom';


export default function Calorie() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');
  const [Cal, setCal] = useState('');
  const [gender, setGender] = useState('');
  const [add,setadd]=useState('');

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);
    let Cal;
    let add;
    if (gender.toLowerCase() === 'm' || gender.toUpperCase ==='M') {
      Cal = 10 * weight + 6.25* height - 5 * age + 5;
      add=Cal
    } else if (gender.toLowerCase() === 'f'|| gender.toUpperCase ==='F') {
      Cal = 10 * weight + 6.25* height - 5 * age - 161;
      add=Cal
    } else {
      setMessage('Invalid gender');
      return;
    }

    if (bmi < 16) {
      setMessage(' of Severe Thinness. ');
    } else if (bmi >= 16 && bmi < 17) {
      setMessage(' of Moderate Thinness. ');
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage(' of Mild Thinness. ');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage(' of Healthy weight. ');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage(' of Overweight. ');
    } else if (bmi >= 30 && bmi < 35) {
      setMessage(' of Obese Class I. ');
    } else if (bmi >= 35 && bmi < 40) {
      setMessage(' of Obese Class II. ');
    } else if (bmi >= 40) {
      setMessage(' of Obese Class III. ');
    }
    setBMI('Your BMI is ' + bmi.toFixed(2));
    setCal(Cal.toFixed(0));
    setadd(add.toFixed(0));
  }

  return (
      <div>
        <div className="flex flex-col items-center justify-center text-center">
        <h1>Calorie Calculator</h1>
        Let's calculate your Body Mass Index.  Type the values below

        <div className="area-input">
        <input
          value={gender}
          type="text"
          placeholder="Gender ('M' or 'F')"
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          value={age}
          type="number"
          placeholder="Age (in Years)"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          value={height}
          type="number"
          placeholder="Height (in cm)"
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          value={weight}
          type="number"
          placeholder="Weight (in kg)"
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <button onClick={calculateBMI} className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
          border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
          calculate
        </button>
        </div>
          <h2 className='font-bold text-xl tracking-wider mb-5'>{bmi}{message}</h2>
        </div>
        <div className="result">
        <div className='en'>
      </div>
      {add?(<table className='table1'>
          <th>WeigthLoss</th>
          <th>WeigthGain</th>
          <th>Week</th>
          {add?(<tr>
            <td>{(Number(add)*1.2).toFixed(0)}<br/><p className='p'>Maintain weight</p></td>
            <td>{(Number(add)*1.2).toFixed(0)}<br/><p className='p'>Maintain weight</p></td>
            <td>0</td>
          </tr>):(<tr>
            <td></td>
            <td></td>
            <td>0</td>
            </tr>
          )}
          {add?(<tr>
            <td>{((Number(add)*1.2) * 0.93).toFixed(0)}<br/><p className='p'>{'(0.12 Kg/week)'}</p></td>
            <td>{((Number(add)*1.2) * 1.07).toFixed(0)}<br/><p className='p'>{'(0.12 Kg/week)'}</p></td>
            <td>1</td>
          </tr>):(<tr>
            <td></td>
            <td></td>
            <td>1</td>
            </tr>
          )}
          {add?(<tr>
            <td>{((Number(add)*1.2)*0.87).toFixed(0)}<br/><p className='p'>{'(0.25 Kg/week)'}</p></td>
            <td>{((Number(add)*1.2) * 1.13).toFixed(0)}<br/><p className='p'>{'(0.25 Kg/week)'}</p></td>
            <td>2</td>
          </tr>):(<tr>
            <td></td>
            <td></td>
            <td>2</td>
            </tr>
          )}
          
          {add?(<tr>
            <td>{((Number(add)*1.2)*0.75).toFixed(0)}<br/><p className='p'>{'(0.5 Kg/week)'}</p></td>
            <td>{((Number(add)*1.2) * 1.25).toFixed(0)}<br/><p className='p'>{'(0.5 Kg/week)'}</p></td>
            <td>3</td>
          </tr>):(<tr>
            <td></td>
            <td></td>
            <td>3</td>
            </tr>
          )}
          {add?(<tr>
            <td>{((Number(add)*1.2)*0.50).toFixed(0)}<br/><p className='p'>{'(1 Kg/week)'}</p></td>
            <td>{((Number(add)*1.2) * 1.50).toFixed(0)}<br/><p className='p'>{'(1 Kg/week)'}</p></td>
            <td>4</td>
          </tr>):(<tr>
            <td></td>
            <td></td>
            <td>4</td>
            </tr>
          )}<br/>
          {add?(<p className='wqw'>* Please consult with a doctor when losing 0.5 kg or more per week since it requires that you consume less than the minimum recommendation of 1,500 calories a day.</p>):('')}
        </table>):('')}
        <div>
          <table className='table3'>
            <th>Energy from Common Food Components</th>
            <th>KJ per gram</th>
            <th>Calorie (kcal) per gram</th>
            <th>kJ per ounce</th>
            <th>Calorie (kcal) per ounce</th>
            <tr>
                <td>Fat</td>
                <td>37</td>
                <td>8.8</td>
                <td>1,049</td>
                <td>249</td>
            </tr>
            <tr>
                <td>Protien</td>
                <td>17</td>
                <td>4.1</td>
                <td>482</td>
                <td>116</td>
            </tr>
            <tr>
                <td>Carbohydrates</td>
                <td>17</td>
                <td>4.1</td>
                <td>482</td>
                <td>116</td>
            </tr>
            <tr>
                <td>Fiber</td>
                <td>8</td>
                <td>1.9</td>
                <td>227</td>
                <td>54</td>
            </tr>
            <tr>
                <td>Ethanol(Drinking Alcohol)</td>
                <td>29</td>
                <td>6.9</td>
                <td>822</td>
                <td>196</td>
            </tr>
            <tr>
                <td>Organic acids</td>
                <td>13</td>
                <td>3.1</td>
                <td>369</td>
                <td>88</td>
            </tr>
            <tr>
                <td>Polyols (sugar alcohols, sweeteners)</td>
                <td>10</td>
                <td>2.4</td>
                <td>283</td>
                <td>68</td>
            </tr>
          </table>
        </div>
        </div>
        <div>
        <tr className='rr'><p className='font-bold text-xl'>Result</p></tr>
        <table className='table5'>
          <p className='re'>{'BMR ='+Cal+'Calories/Day'}</p>
        </table>
      </div>
      <button className='eee'>
          <Link to='/options' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
            border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
             Go back
          </Link>
        </button>
        <table className='table6'>
          <tr className='pp'>This Calorie Calculator is based on several equations, and the results of the calculator are based on an estimated average. The Harris-Benedict Equation was one of the earliest equations used to calculate basal metabolic rate (BMR), which is the amount of energy expended per day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor Equation was introduced. The Katch-McArdle Formula is slightly different in that it calculates resting daily energy expenditure (RDEE), which takes lean body mass into account, something that neither the Mifflin-St Jeor nor the Harris-Benedict Equation do. Of these equations, the Mifflin-St Jeor Equation is considered the most accurate equation for calculating BMR with the exception that the Katch-McArdle Formula can be more accurate for people who are leaner and know their 
            body fat percentage.</tr>
        </table>
      </div>
  )
}
