

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

const FetchWeather = (city, setCity, setError, setShow, setWeather, setBackground) => {
    fetch(`${api.base}?q=${city}&appid=${api.key}&units=metric`)
    .then(res => {
      if(!res.ok){
        setError('No matching locattion found!');
        setCity('');
        setShow(false);
        setWeather({})
        return false;
      }
      else if(res.status === 200){
       return res.json()
      }
    })
    .then(data => {
      setWeather(data);
      // set background depending on weather condition
      switch(data.weather[0].main.toLowerCase()){
        case "clear":
          setBackground("bg-sunny");
          break;
        case "rain":
          setBackground("bg-stormy");
          break;
        case "clouds":
          setBackground("bg-cloudy");
          break;
        case "haze":
          setBackground("bg-haze");
          break;
        case "mist":
          setBackground("bg-mist");
          break;
        default:
          setBackground("bg-default min-h-screen");
          break;
      }

      // set errror and hide the introductory section
        setError("");
        setShow(false);
        return true
      })
    .catch(err => {
      //set any error if available
      setError("No matching location found! Try again");
    })
  }

export default FetchWeather;