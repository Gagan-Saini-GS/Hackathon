import React from 'react'
import AIPlantLogo from "../assets/cardimage/aiplanet_logo.png";


const Navbar = () => {
    return (
        <div className="w-full px-20 py-2 bg-white shadow-md">
            <div className="text-xl font-semibold flex items-center">
                <img src={AIPlantLogo} className='w-20 h-12' />
            </div>
        </div>
    )
}

export default Navbar