import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setWeatherData} from "../redux/weatherSlice";

const API_KEY = '5d1e633f1fb26104c764ae832030cd8c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (place) => {
  console.log('Fetching weather for:', place); 
  const response = await axios.get(`${BASE_URL}?q=${place}&appid=${API_KEY}&units=metric`);
  return response.data;
};

const useWeatherData = (place) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['weather', place],
    queryFn: () => fetchWeather(place),
    enabled: !!place,
    onSuccess: (data) => {
      console.log('Weather data:', data);
      dispatch(setWeatherData(data));
    },
  });
};

export default useWeatherData;
