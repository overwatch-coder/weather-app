import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

const SavedCities = ({cities, loadCity, removeSavedCity}) => {
  return (
    <div className="mt-8 w-[85vw] text-center h-full mb-16">
        {cities.length > 0 && 
        <div>
            <h3 className="text-center mb-5 text-blue-800 text-2xl">
            <span className="border-b-2 border-b-black">Saved Cities</span>
            </h3>
            <div className="flex justify-center items-center gap-x-4 gap-y-10 flex-wrap pt-5">
            {cities && cities.map((city, index) => (
                <div key={index} className="group relative flex items-center gap-x-3">
                <span 
                    className="bg-indigo-500/40 py-2 px-7 text-light cursor-pointer rounded-md shadow-lg hover:bg-indigo-600 hover:shadow-xl transition"
                    onClick={loadCity}
                    >
                    {city}
                </span>
                <MdOutlineCancel 
                    className="hidden group-hover:block absolute text-xl text-light top-0 right-0 cursor-pointer" 
                    onClick={removeSavedCity}
                />
                </div>
            ))}
            </div>
        </div>}
    </div>
  )
}

export default SavedCities
