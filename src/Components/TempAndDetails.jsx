import React from 'react'
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise,GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdLocationCity } from "react-icons/md";
import '../Stylesheets/TempAndDetails.css'
import sun from '../assets/sun.png'
import { useSelector } from 'react-redux';
import useWeatherData from '../hooks/useWeatherData'


function TempAndDetails() {

    const place = useSelector(state=>state.weather.place)
    const{data,isLoading} = useWeatherData(place)
    
    const iconUrl = data? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` : sun
     
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, 
      timeZone: 'UTC'
    };

    const timestamp1 = data?.sys.sunrise;
    const timezone = data?.timezone;
    const sunrise = new Date((timestamp1+timezone)*1000)
    const formattedSunrise = sunrise.toLocaleTimeString('en-GB',options)

    const timestamp2 = data?.sys.sunset;
    const sunset = new Date((timestamp2+timezone)*1000);
    const formattedSunset = sunset.toLocaleTimeString('en-GB',options)

  return (
    <div className='temp-details'>
      
        <div id="one">
            {data ? data.weather[0].main : 'description'}
        </div>
        
        <div id="two">
            <img id="sun" src={iconUrl}/>
            <div style={{fontSize:30,fontWeight:600}}>{data ? data.main.temp : '' }°C</div>
            <div className='two-flex'>
                <div><FaThermometerEmpty style={{marginRight:2}}/><p> 
                    Real Feel: {data ? data.main.feels_like : ' '}°C
                    </p></div>
                <div><BiSolidDropletHalf style={{marginRight:2}}/><p> 
                    Humidity: {data ? data.main.humidity : ' '}
                    </p></div>
                <div><FiWind style={{marginRight:2}}/><p> 
                    Wind: {data ? data.wind.speed : ' '} km/h
                    </p></div>
            </div>
        </div>

        <div id="three">
            <div> <GiSunrise size={25} style={{marginRight:4}} /> 
               Rise: {data ? formattedSunrise : ' '}
            </div>
            <div> <GiSunset size={25} style={{marginRight:4}}/> 
               Set: {data ? formattedSunset : ' '}
            </div>
            <div> <MdKeyboardArrowUp size={25} style={{marginRight:4}}/> 
              High: {data ? data.main.sea_level : ' '}
            </div>
            <div> <MdKeyboardArrowDown size={25} style={{marginRight:4}}/> 
              Low: {data ? data.main.grnd_level : ' '}
            </div>
        </div>


    </div>
  )
}

export default TempAndDetails
