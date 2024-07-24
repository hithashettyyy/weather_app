import React from 'react'
import '../Stylesheets/TimeAndLocation.css'
import useWeatherData from '../hooks/useWeatherData'
import { useSelector } from 'react-redux'

function TimeAndLocation() {
  
  const place = useSelector(state=>state.weather.place)
  const{data,isLoading} = useWeatherData(place)
  
  if(!isLoading)
    console.log(data)

  const timeStamp = data?.dt
  const timezone = data?.timezone
  const date = new Date((timeStamp+timezone) * 1000).toUTCString()

  return (
    <div className='time-location'>
     
     {data ?
         <>
          <div style={{color:'white'}}> {date} </div>
          <h1>{data.name}, {data.sys.country}</h1>
         </>
         :
         <>
          <div style={{color:'white'}}>Today's date and time</div>
          <h1>City, Country</h1>
         </>
     }
    </div>
  )
}

export default TimeAndLocation
