import React from 'react';
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-10">
        <div className="flex items-center gap-x-2 text-xl md:text-3xl text-light">
            <span>Made with</span>
            <IoMdHeart className="text-xl md:text-4xl text-red-500 animate-pulse" />
            <span> by Overwatch Coder </span>
        </div>
    </footer>
  )
}

export default Footer
