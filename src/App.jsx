import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import ProtectedRoute from './component/ProtectedRoute'
import Error from './pages/Error'
import FoodDetails from './component/FoodDetails'
import FoodData from "./data/FoodData.json";

const App = () => {
  
  const [foodData, setFoodData]=useState(FoodData)
  console.log(foodData)
  return (
    <div className='overflow-hidden'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/food/:id' element={<FoodDetails food={foodData}/>} />
      <Route
          path="/success"
           element={<ProtectedRoute element={<Success/>}/>}/>
        
        <Route path="/*" element={<Error />} />
      </Routes>
  
    
    </div>
  )
}

export default App
