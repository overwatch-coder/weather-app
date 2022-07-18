import React from 'react';
import { MdOutlineSearch } from "react-icons/md";


const Search = ({fetchWeather, city, setCity}) => {
  return (
    <form 
        method="GET" 
        onSubmit={fetchWeather} 
        className="pt-3 relative flex items-center">
        <div className="w-[85vw]">
            <input 
            type="text"
            placeholder="Enter city name..."
            className="w-full rounded font-[poppins] form-input placeholder:text-gray-400 py-4 shadow-md focus:shadow-xl border-none focus:ring-0"
            onChange={event => setCity(event.target.value)}
            value={city}
            />
            <MdOutlineSearch 
            className="absolute top-7 right-3 text-3xl text-gray-400" />
        </div>
    </form>
  )
}

export default Search
