import React from 'react'

const Home = ({show}) => {
  return (
    <div>
    {show && 
        <div className="text-center flex flex-col items-center gap-y-10 mt-28">
            <h3 className="text-6xl text-light">
            Welcome to Overwatch Weather App
            </h3>
            <p className="text-lg font-[poppins] italic text-light">
            Just type the name of the city you want and press enter to get the details...
            </p>
        </div>
    }
    </div>
  )
}

export default Home
