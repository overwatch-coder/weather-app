import React from 'react'

const DisplayWeather = ({displayWeather, weather}) => {
  return (
    <div>
    {displayWeather &&
        <div className="relative mt-10 text-center flex flex-col items-center gap-y-3">

        {/* Display name of City and its country */}
          <p className="text-white text-4xl flex items-center gap-x-1">
            <span>
              {weather.name}
            </span>
            <span>,</span>
            <span>
              {weather.sys.country}
            </span>
          </p>

          {/* Display the current time */}
          <p className="text-xl text-light">
            {new Date().toDateString()}
          </p>

          {/* Display Temperature*/}
          <div className="flex flex-col items-center gap-y-3">
              <span 
                className="text-9xl p-8 bg-gray-200/50 shadow-2xl drop-shadow-lg rounded-md text-red-600 font-[swap]">
                {Math.floor(weather.main.temp)}°C
                <p className="text-black text-center mt-4 text-2xl flex items-center justify-center gap-x-2">
                  <span>min: {Math.floor(weather.main.temp_min)}°C</span>
                  <span></span>
                  <span>max: {Math.floor(weather.main.temp_max)}°C</span>
                </p>
              </span>
              <div 
                className="flex items-center gap-x-5 font-[poppins] text-xl text-red-800 bg-gray-50/50 py-3 px-4 rounded">
                <span>
                  Feels like : {Math.floor(weather.main.feels_like)}°C
                </span>
              </div>

              {/* Display Weather condition (sunny, cloudy, clear etc)*/}
              <p className="mt-3 text-3xl font-semibold text-light font-[poppins]">
                <span>
                  {weather.weather[0].description}
                </span>
              </p>
            </div>
        </div>
    }
    </div>
  )
}

export default DisplayWeather
