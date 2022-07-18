/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import Search from "./components/Search";
import Home from "./components/Home";
import DisplayWeather from "./components/DisplayWeather";
import Footer from "./components/Footer";
import SavedCities from "./components/SavedCities";
import FetchWeather from "./components/FetchWeather";

function App() {

  document.title = "Overwatch Weather App";

  const localCities = JSON.parse(localStorage.getItem('cities'));
  const savedCities = (localCities !== null && localCities.length > 0) ? localCities : []

  let [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [background, setBackground] = useState('bg-default');
  const [cities, setCities] = useState(savedCities);

   // function to save a city
   const saveCity = (data) => {
    if(data !== ""){
      if (!(savedCities.includes(data))){
        setCities(prevCities => [...prevCities, data]);
        setCity('');
      }
    }
  }

  // save the added cities locally
  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities])

  const fetchWeather = (event) => {
    // prevent default submit behaviour i.e refresh
    event.preventDefault();

    // check if city is not empty
    if(city === ''){
      setCity('');
      return false;
    }

    // Fetch The Weather Data using its fetch API component
    FetchWeather(city, setCity, setError, setShow, setWeather, setBackground);
  }

    // load city when button is clicked
    const loadCity = (event) => {
      city = event.target.innerHTML !== '' ? event.target.innerHTML : city;
      // check if city is not empty
      if(city === ''){
        setCity('');
        return false;
      }
      // fetch weather info
      FetchWeather(city, setCity, setError, setShow, setWeather, setBackground);

    }

    // remove saved City from local storage
    const removeSavedCity = (event) => {
      const cityToRemove = event.target.previousSibling.innerHTML;
      const citiesInStorage = JSON.parse(localStorage.getItem('cities'));

      let remainingCities = citiesInStorage.filter(cityInStorage => cityInStorage !== cityToRemove);
      
      localStorage.setItem('cities', JSON.stringify(remainingCities));
      setCities(remainingCities);
    }


    //display the weather information if these conditions are verified
    const displayWeather  = weather && (show === false) ? true : false; 

    return (
        <div 
          className={`bg-cover bg-no-repeat bg-center ${show ? 'h-screen': 'min-h-screen'} overflow-x-hidden ${error ? 'bg-default h-screen' : background} transition-all duration-1000 ease-in-out`}>
            <div className="flex items-center flex-col bg-[rgba(0,0,0,0.3)] min-h-full">
              <div className="flex flex-col items-center">
              {/* Search City Form */}
                <Search
                  fetchWeather={fetchWeather} 
                  setCity={setCity}
                  city={city} 
                />

                {/* Display error if city cannot be found */}
                {error && 
                  <div className="text-light flex flex-col items-center mt-20 text-2xl pb-32">{error}</div>
                }

                {/* Introductory section if city is empty */}
              <Home show={show} />

                {/* Display Weather information based on searched city */}
                <DisplayWeather 
                  displayWeather={displayWeather}
                  weather={weather} 
                />

              {/* Footer */}
                <Footer />
              </div>

              {/* Saved Cities */}
              {(show || displayWeather) &&
                <SavedCities
                  cities={cities}
                  loadCity={loadCity}
                  removeSavedCity={removeSavedCity} 
                />
              }
          </div>

          {/* Display Add Button to save a searched city */}
        {displayWeather && 
          <MdAddCircle 
            className="absolute bottom-10 right-10 text-5xl text-light hover:text-light/80 transition cursor-pointer"
            onClick={() => saveCity(city)} 
            />
          }
      </div>
    );

}

export default App;
