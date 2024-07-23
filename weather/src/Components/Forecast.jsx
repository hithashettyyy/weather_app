import React from 'react';
import '../Stylesheets/Forecast.css';
import sun from '../assets/sun.png';
import useForecastData from '../hooks/useForecastData.js';
import { useSelector } from 'react-redux';

function Forecast() {
  const data2 = [1, 2, 3, 4, 5];
  const data = [1, 2, 3, 4];
  const value = 1;
  const place = useSelector(state => state.weather.place);
  const { data: forecast, isLoading } = useForecastData(place);

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, 
    timeZone: 'UTC'
  };


  if (!isLoading) {
    console.log(forecast);
  }

  return (
    <>
      <div className='forecast-container'>
        <p>3 HOUR STEP FORECAST</p>
        <hr />

        <div className='forecast-flex'>
          {
            !forecast ?
              data.map((d, index) => {
                const val = value + (3 * index);
                return (
                  <div key={d} className='item-flex'>
                    <p>{val} AM</p>
                    <img id="sun" src={sun} alt="sun icon" />
                    <p>12°C</p>
                  </div>
                );
              })
              :
              forecast?.list?.filter((_, index) => index < 4)
                .map((day, index) => {

                  const time = new Date(day.dt * 1000).toLocaleTimeString('en-US',options)
                  const url =  `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`

                  return (
                    <div key={index} className='item-flex'>
                      <p>{time}</p>
                      <img id="sun" src={url} alt="sun icon" />
                      <p>{day.main.temp}°C</p>
                    </div>
                  );
                })

          }
        </div>
      </div>

      <div className='forecast-container'>
        <p>5 DAY FORECAST</p>
        <hr />

        <div className='forecast-flex'>
          {!forecast ? (
            data2.map(d => (
              <div key={d} className='item-flex'>
                <p>Wed</p>
                <img id="sun" src={sun} alt="sun icon" />
                <p>12°C</p>
              </div>
            ))
          ) : (
            forecast?.list?.filter((_, index) => index % 5 === 0)
              .map((day, index) => {
                const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
                const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

                return (
                  <div key={index} className='item-flex'>
                    <p>{date}</p>
                    <img id="weather-icon" src={iconUrl} alt="weather icon" />
                    <p>{day.main.temp}°C</p>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </>
  );
}

export default Forecast;
