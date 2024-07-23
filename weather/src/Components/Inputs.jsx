import React, { useState } from 'react';
import '../Stylesheets/Inputs.css';
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { setPlace } from '../redux/weatherSlice';
import { useSelector } from 'react-redux';

function Inputs() {

  const [city, setCity] = useState('');
  const dispatch = useDispatch()

  const handleSearch = () => {
     dispatch(setPlace(city))
     setPlace('')
  };

  const handleCurrentLocation = () => {
    dispatch(setPlace('bengaluru'))
    setPlace('')
 };

  return (
    <div style={{ display: 'flex' }}>
      <div className='input-div'>
        <input
          type="text"
          placeholder='search by city...'
          onChange={(e) => { e.preventDefault(); setCity(e.target.value)}}
          value={city}
        />
        <BiSearch
          color='white'
          size={30}
          className='cursor-pointer transition ease-out hover:scale-125'
          onClick={handleSearch}
        />
        <BiCurrentLocation
          className='cursor-pointer transition ease-out hover:scale-125'
          color='white'
          size={30}
          onClick={handleCurrentLocation}
        />
      </div>
    </div>
  );
}

export default Inputs;
