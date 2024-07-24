import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { setForecastData } from '../redux/weatherSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const API_KEY = '5d1e633f1fb26104c764ae832030cd8c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchForecast = async (place)=>{
    const response = await axios.get(`${BASE_URL}?q=${place}&appid=${API_KEY}&units=metric`)
    return response.data
}

const useForecastData = (place)=>{
    
    const dispatch = useDispatch()
    const forecastData = useSelector(state=>state.weather.forecastData)
    return useQuery({
        queryKey: ['forecast',place],
        queryFn: ()=>fetchForecast(place),
        enabled: !!place,
        onSuccess : (data)=>{
            dispatch(setForecastData(data))
        }
    })
}

export default useForecastData