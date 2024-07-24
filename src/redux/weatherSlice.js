import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    weatherData : [],
    forecastData : [],
    place : '',
}

const weatherSlice = createSlice({
    initialState,
    name:'weather',
    reducers : {
         
        setWeatherData : (state,action)=>{
            state.weatherData = action.payload
        },
        setForecastData : (state,action)=>{
            state.forecastData = action.payload
        },
        setPlace : (state,action)=>{
            state.place = action.payload
        }

     }

})

export default weatherSlice.reducer
export const {setPlace,setWeatherData,setForecastData} = weatherSlice.actions


