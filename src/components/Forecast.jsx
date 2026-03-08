import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Forecast = () => {
  const [weatherData, setweatherData] = useState(null)
  const [loading, setloading] = useState(false)

  const app=()=>{
    const fetchData=()=>{
      loading(true)
    }
    
    
  }
  return (
    <div>Forecast</div>
  )
}

export default Forecast