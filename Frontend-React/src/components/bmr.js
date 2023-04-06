import { useState,useEffect } from 'react';
import '../components/bmr.css';
import Table from './Table.js';
import sanityClient from '@sanity/client';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export default function Bmr() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');
  const [Cal, setCal] = useState('');
  const [gender, setGender] = useState('');
  const [add,setadd]=useState('');
  const [table,settable]=useState(false);
  const [site,setsite]=useState([]);
  const [isloading, setloading]=useState(true);
  const {slug}=useParams()

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
    setCal(' and your daily calorie needs are '+Cal.toFixed(0));
    setadd(add.toFixed(0));
    settable(true)
  }
  useEffect(() => {
    const client = sanityClient({
      projectId: '3msprrd6',
      dataset: 'production',
      apiVersion: '2023-03-23',
      useCdn: true,
    });
    
    client
    .fetch(
      `*[_type == "sitetitle"] {
        title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      ).then((data) => setsite(data[0]))
      setloading(false)
},[slug])

  return (
      <div>
        <div className="flex flex-col items-center justify-center text-center">
        <h1>BMI Calculator</h1>
        Let's calculate your Body Mass Index. <br /> Type the values below

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
          <Table Cal={Cal} table={table} add={add} />
        </div>
        <div className='site'>
          <section className='sc'>
              <p className='font-bold text-2xl'>{site.title}</p>
          </section>
          {isloading ? <h1>.</h1>:
            <section className='iimg'>
              <section className='px-5 xl:max-w-6xl xl:mx-auto pb-20'>
                {site.mainImage && site.mainImage.asset &&(
                <img src={site.mainImage.asset.url} 
                alt={site.title}
                title={site.title}
                className='blog'/>)}
            </section>
            </section>
            }
            <p className='rm'>
              This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent subdivisions within a major categorization.
            </p>
            <section className='rp'>
            <p className='font-bold text-xl'>Below are the equations used for calculating BMI </p>
            </section>
            <section className='ll'>
            <p className='font-bold text-l'>Mifflin-St Jeor Equation:</p>
            </section>
            <section className='lk'>
            <p>For men: BMI = 10W + 6.25H - 5A + 5</p><br/>
            <p>For women: BMI = 10W + 6.25H - 5A - 161</p>
            </section>
            <p className='bb'>*where:</p>
            <section className='yu'>
              <p>W is body weight in kg</p>
              <p>H is body height in cm</p>
              <p>A is age</p>
            </section>
        </div>
        <div ><br/>
        <button className='ee'>
          <Link to='/options' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
            border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
             Go back
          </Link>
        </button>
        </div>
      </div>
  )
}
