import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/home.js'
import Aboutus from './components/Aboutus'
import Bmr from './components/bmr.js'
import Error from './components/error.js'
import Header from './components/header.js'
import Know from './components/know'
import Table from './components/Table'
import Singlepost from './components/singlepost.js'
import Welcome from './components/welcome'
import Options from './components/options'
import Calorie from './components/calorie.js'
import Comment from './components/comment.js'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        {/* {home} */}
        <Route path='/' element={<Home/>}/>
        {/* {Single post} */}
        <Route path='/know/:slug' element={<Singlepost/>}/>
        {/* {Know more} */}
        <Route path='/know' element={<Know/>}/>
        {/* {Welcome page} */}
        <Route path='/welcome' element={<Welcome/>}/>
        {/* {main} */}
        <Route path='/aboutus' element={<Aboutus/>}/>
        {/* {bmr calculator} */}
        <Route path='/bmr' element={<Bmr/>}/>
        {/* {Tables} */}
        <Route path='/table' element={<Table/>}/>
        {/* {error} */}
        <Route path='*' element={<Error/>}/>
        {/*options */}
        <Route path='/options' element={<Options/>}/>
        {/*comments */}
        <Route path='/comment' element={<Comment/>}/>
        {/*Calorie */}
        <Route path='/calorie' element={<Calorie/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App