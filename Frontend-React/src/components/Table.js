import { Link } from 'react-router-dom';
import '../components/bmr.css';


export default function WeightLoss(props) {
  const {table,add} = props;
  return (
    <div>
      <div>
        <span className='rb'><p className='font-bold text-xl'><Link to='/know/bmi'>BMI Table</Link></p></span>
        <tr className='rr'><p className='font-bold text-xl'>Result</p></tr>
        {table?<table className='table5'>
          <p className='re'>{'BMR ='+add+'Calories/Day'}</p>
          <p className='rt'>Note: click on Activity Level to see refernce video</p>
        </table>:''}
      </div>
      <div>
        <table className='table4'>
          <th>Activity Level</th>
          <th>calorie</th>
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=dj03_VDetdw&t=1s" target="_blank" rel="noopener noreferrer">Sedentary: little or no exercise(Home)</a></td>
            <td>{Number((add * 1.2).toFixed(0))}</td>
          </tr>):(
            <tr>
            <td><a href="https://www.youtube.com/watch?v=dj03_VDetdw&t=1s" target="_blank" rel="noopener noreferrer">Sedentary: little or no exercise(Home)</a></td>
            <td></td>
          </tr>
          )}
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=5ARgeR1rMTo" target="_blank" rel="noopener noreferrer">Exercise 1-3 times/week(Home)</a></td>
            <td>{Number((add * 1.37).toFixed(0))}</td>
          </tr>):(
            <tr>
            <td><a href="https://www.youtube.com/watch?v=5ARgeR1rMTo" target="_blank" rel="noopener noreferrer">Exercise 1-3 times/week(Home)</a></td>
            <td></td>
            </tr>
          )}
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">Exercise 4-5 times/week(Home/Gym)</a></td>
            <td>{Number((add * 1.46).toFixed(0))}</td>
          </tr>):(
            <tr>
            <td><a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">Exercise 4-5 times/week(Home/Gym)</a></td>
            <td></td>
            </tr>
          )}
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=51VupvTTSno" target="_blank" rel="noopener noreferrer">Daily exercise or intense exercise 3-4 times/week(Gym)</a></td>
            <td>{Number((add * 1.55).toFixed(0))}</td>
          </tr>):(
            <tr>
              <td><a href="https://www.youtube.com/watch?v=51VupvTTSno" target="_blank" rel="noopener noreferrer">Daily exercise or intense exercise 3-4 times/week(Gym)</a></td>
              <td></td>
            </tr>
          )}
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">Intense exercise 6-7 times/week(Gym)</a></td>
            <td>{Number((add * 1.71).toFixed(0))}</td>
          </tr>):(
            <tr>
              <td><a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">Intense exercise 6-7 times/week(Gym)</a></td>
              <td></td>
            </tr>
          )}
          {add?(<tr>
            <td><a href="https://www.youtube.com/watch?v=R2TbcQDAVkU" target="_blank" rel="noopener noreferrer">Very intense exercise daily, or physical job(Gym)</a></td>
            <td>{Number((add * 1.9).toFixed(0))}</td>
          </tr>):(
            <tr>
              <td><a href="https://www.youtube.com/watch?v=R2TbcQDAVkU" target="_blank" rel="noopener noreferrer">Very intense exercise daily, or physical job(Gym)</a></td>
              <td></td>
            </tr>
          )}
        </table>
      </div>
      <div>
      <table className='table2'>
            <th>Classification</th>
            <th>BMI range - kg/m2</th>
            <tr>
              <td>Severe Thinness</td>
              <td>Less than 16</td>
            </tr>
            <tr>
              <td>Moderate Thinness</td>
              <td>16 - 17</td>
            </tr>
            <tr>
              <td>Mild Thinness</td>
              <td>17-18</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5-25</td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25-30</td>
            </tr>
            <tr>
              <td>Obese Class I</td>
              <td>30-35</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>35-40</td>
            </tr>
            <tr>
              <td>Obese Class III</td>
              <td>Greater than 40</td>
            </tr>
        </table>
      </div>
    </div>
  );
}
